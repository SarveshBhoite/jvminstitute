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
        'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
        'v': 'urn:schemas-microsoft-microsoft-com:vml',
    }

    # Print ALL text runs in document order
    print("=== ALL TEXT NODES IN jvm.img3 copy.docx ===")
    texts = doc_tree.findall('.//w:t', namespaces)
    for i, t in enumerate(texts):
        if t.text and t.text.strip():
            print(f"{i:3d}: {t.text.strip()}")

    print("\n=== ALL MEDIA FILES IN jvm.img3 copy.docx ===")
    for k, v in rels_map.items():
        if 'image' in v:
            print(f"Rel {k}: {v}")
