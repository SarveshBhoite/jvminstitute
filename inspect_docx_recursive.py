import zipfile
import xml.etree.ElementTree as ET

docx_path = 'jvm.img3 copy.docx'

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

    print("=== RECURSIVE SEARCH OF ALL TEXT & IMAGES IN jvm.img3 copy.docx ===")

    all_p = doc_tree.findall('.//w:p', namespaces)
    print(f"Total <w:p> elements in document: {len(all_p)}")

    for i, p in enumerate(all_p):
        texts = [t.text for t in p.findall('.//w:t', namespaces) if t.text]
        txt = ''.join(texts).strip()
        blips = p.findall('.//a:blip', namespaces)
        imgs = [rels_map.get(b.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')) for b in blips]
        
        # Check if 'dhiraj' or any student is mentioned
        if txt or imgs:
            print(f"P #{i:3d} | Imgs: {imgs} | Text: {txt}")
