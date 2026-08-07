import zipfile
import xml.etree.ElementTree as ET
import json
import os

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

    print("=== FULL BODY FROM P 210 ONWARDS IN jvm.img3 copy.docx ===")
    
    p_count = 0
    for idx, elem in enumerate(body):
        tag = elem.tag.split('}')[-1]
        if tag == 'p':
            p_count += 1
            if p_count >= 200:
                texts = [t.text for t in elem.findall('.//w:t', namespaces) if t.text]
                txt = ''.join(texts).strip()
                blips = elem.findall('.//a:blip', namespaces)
                imgs = [rels_map.get(b.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')) for b in blips]
                if txt or imgs:
                    print(f"[P {p_count}] Text: {txt} | Imgs: {imgs}")
