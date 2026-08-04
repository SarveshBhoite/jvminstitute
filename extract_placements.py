import zipfile
import xml.etree.ElementTree as ET
import json
import os
import shutil

docx_path = 'jvm.imgs.docx'
output_img_dir = 'public/placements'

os.makedirs(output_img_dir, exist_ok=True)

with zipfile.ZipFile(docx_path, 'r') as z:
    doc_xml = z.read('word/document.xml')
    rels_xml = z.read('word/_rels/document.xml.rels')

    rels_tree = ET.fromstring(rels_xml)
    rels_map = {}
    for child in rels_tree:
        rid = child.attrib.get('Id')
        target = child.attrib.get('Target')
        if rid and target:
            rels_map[rid] = target

    doc_tree = ET.fromstring(doc_xml)
    namespaces = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
        'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
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

    # Group elements by student records
    records = []
    curr = {}
    last_img = None

    for elem in elements:
        txt = elem['text']
        imgs = elem['imgs']

        if imgs:
            last_img = imgs[0]

        if txt.startswith('Full name:'):
            if 'name' in curr:
                records.append(curr)
                curr = {}
            if last_img:
                curr['raw_img'] = last_img
                last_img = None
            curr['name'] = txt.replace('Full name:', '').strip()
        elif txt.startswith('Job role:'):
            curr['role'] = txt.replace('Job role:', '').strip()
        elif txt.startswith('Package:'):
            curr['package'] = txt.replace('Package:', '').strip()
        elif txt.startswith('Company name:'):
            curr['company'] = txt.replace('Company name:', '').strip()
        elif txt and not any(txt.startswith(k) for k in ['Photo:', 'Review:', 'Review-', 'Full name:', 'Job role:', 'Package:', 'Company name:']):
            curr['review'] = txt.strip('\"')

    if curr and 'name' in curr:
        records.append(curr)

    # Extract images and map paths
    for idx, r in enumerate(records, start=1):
        if 'raw_img' in r:
            ext = os.path.splitext(r['raw_img'])[1]
            safe_name = "".join(c for c in r['name'] if c.isalnum()).lower()
            img_filename = f"placement_{idx}_{safe_name}{ext}"
            target_path = os.path.join(output_img_dir, img_filename)
            
            # Extract image from zip
            with z.open(f"word/{r['raw_img']}") as src, open(target_path, 'wb') as dst:
                shutil.copyfileobj(src, dst)
            
            r['image'] = f"/placements/{img_filename}"
        else:
            r['image'] = "/place1.png"

print(f"Extracted {len(records)} placement records.")
with open('extracted_placements.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, indent=2, ensure_ascii=False)

print("Saved to extracted_placements.json")
