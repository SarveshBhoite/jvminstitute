import zipfile
import xml.etree.ElementTree as ET
import glob
import re

docx_files = ['jvm.imgs.docx', 'jvm.img1.docx', 'jvm.img3.docx', 'jvm.img3 copy.docx', 'jvmdata.docx']

for docx_path in docx_files:
    print(f"\n=======================================================")
    print(f"EXAMINING RAW STRUCTURE OF: {docx_path}")
    print(f"=======================================================")
    
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

        elements = []
        for p in body.findall('.//w:p', namespaces):
            texts = [t.text for t in p.findall('.//w:t', namespaces) if t.text]
            text_str = ''.join(texts).strip()
            blips = p.findall('.//a:blip', namespaces)
            img_targets = []
            for blip in blips:
                embed = blip.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                if embed in rels_map:
                    img_targets.append(rels_map[embed])
            if text_str or img_targets:
                elements.append({'text': text_str, 'imgs': img_targets})

        print(f"Total elements: {len(elements)}")
        for idx, elem in enumerate(elements):
            txt = elem['text']
            imgs = elem['imgs']
            if txt or imgs:
                print(f" [{idx:3d}] Imgs: {imgs} | Text: {txt}")
