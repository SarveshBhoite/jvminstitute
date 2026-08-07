import zipfile
import xml.etree.ElementTree as ET

docx_path = 'jvmdata.docx'

with zipfile.ZipFile(docx_path, 'r') as z:
    doc_xml = z.read('word/document.xml')
    rels_xml = z.read('word/_rels/document.xml.rels')

    rels_tree = ET.fromstring(rels_xml)
    rels_map = {c.attrib.get('Id'): c.attrib.get('Target') for c in rels_tree if c.attrib.get('Id') and c.attrib.get('Target')}

    doc_tree = ET.fromstring(doc_xml)
    namespaces = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
        'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    }

    body = doc_tree.find('w:body', namespaces)

    lines = []
    for i, p in enumerate(body.findall('.//w:p', namespaces)):
        texts = [t.text for t in p.findall('.//w:t', namespaces) if t.text]
        txt = ''.join(texts).strip()
        blips = p.findall('.//a:blip', namespaces)
        imgs = [rels_map.get(b.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')) for b in blips]
        if txt or imgs:
            lines.append(f"P #{i:3d} | Imgs: {imgs} | Text: {txt}")

with open('jvmdata_inspection.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"Inspection written to jvmdata_inspection.txt ({len(lines)} lines)")
