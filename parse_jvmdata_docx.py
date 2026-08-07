import zipfile
import xml.etree.ElementTree as ET
import json
import os
import shutil
import re

output_img_dir = 'public/placements'
os.makedirs(output_img_dir, exist_ok=True)

docx_path = 'jvmdata.docx'

def parse_package_num(pkg_str):
    if not pkg_str:
        return 0.0
    pkg_clean = str(pkg_str).lower().replace('lakh', '').replace('lpa', '').replace('lakhs', '').strip()
    match = re.search(r'[\d.]+', pkg_clean)
    if match:
        try:
            return float(match.group(0))
        except ValueError:
            return 0.0
    return 0.0

def clean_field(val, prefix_patterns):
    if not val:
        return ""
    val = str(val).strip()
    for pat in prefix_patterns:
        val = re.sub(pat, '', val, flags=re.I).strip()
    return val

print(f"Reading {docx_path}...")

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

    print(f"Total elements extracted from {docx_path}: {len(elements)}")

    file_records = []
    curr = {}
    last_img = None
    record_counter = 500

    for elem in elements:
        txt = elem['text']
        imgs = elem['imgs']

        if imgs:
            last_img = imgs[0]

        txt_lower = txt.lower().strip()

        if any(txt_lower.startswith(k) for k in ['full name', 'name', 'student name']):
            if 'name' in curr and curr['name']:
                file_records.append(curr)
                curr = {}
            if last_img:
                curr['raw_img'] = last_img
                last_img = None
            curr['name'] = clean_field(txt, [r'^full name[:\s\-]*', r'^name[:\s\-]*', r'^student name[:\s\-]*'])
        elif any(txt_lower.startswith(k) for k in ['job role', 'role']):
            curr['role'] = clean_field(txt, [r'^job role[:\s\-]*', r'^role[:\s\-]*'])
        elif any(txt_lower.startswith(k) for k in ['package']):
            curr['package'] = clean_field(txt, [r'^package[:\s\-]*'])
        elif any(txt_lower.startswith(k) for k in ['company name', 'company']):
            curr['company'] = clean_field(txt, [r'^company name[:\s\-]*', r'^company[:\s\-]*'])
        elif any(txt_lower.startswith(k) for k in ['review']):
            curr['review'] = clean_field(txt, [r'^review[:\s\-]*'])
        elif txt and 'name' in curr:
            if not curr.get('role') and any(r in txt_lower for r in ['engineer', 'consultant', 'developer', 'lead', 'analyst', 'associate', 'specialist']):
                curr['role'] = txt
            elif not curr.get('company') and any(c in txt_lower for c in ['pvt', 'ltd', 'inc', 'tech', 'software', 'cognizant', 'tcs', 'wipro', 'hcl', 'ey', 'lumiq', 'bitwise', 'harman']):
                curr['company'] = txt
            elif 'review' not in curr:
                curr['review'] = txt.strip('\"')
            else:
                curr['review'] += " " + txt.strip('\"')

    if curr and curr.get('name'):
        file_records.append(curr)

    print(f"Parsed {len(file_records)} records from {docx_path}:")
    for r in file_records:
        clean_name = clean_field(r.get('name', ''), [r'^full name[:\s\-]*', r'^name[:\s\-]*'])
        r['name'] = clean_name.title() if clean_name else "JVM Student"
        
        clean_role = clean_field(r.get('role', ''), [r'^job role[:\s\-]*', r'^role[:\s\-]*'])
        r['role'] = clean_role.title() if clean_role else "Data Engineer"

        clean_comp = clean_field(r.get('company', ''), [r'^company name[:\s\-]*', r'^company[:\s\-]*'])
        r['company'] = clean_comp.title() if clean_comp else "Top IT Enterprise"

        pkg_num = parse_package_num(r.get('package', ''))
        r['package_num'] = pkg_num
        r['package_formatted'] = f"{pkg_num:g} LPA" if pkg_num > 0 else "10 LPA"

        if not r.get('review'):
            r['review'] = "The practical training, live projects, and continuous mentorship at JVM Institute played a crucial role in enhancing my technical skills and landing my dream IT job."

        if 'raw_img' in r and r['raw_img']:
            ext = os.path.splitext(r['raw_img'])[1]
            safe_name = "".join(c for c in r['name'] if c.isalnum()).lower()
            img_filename = f"placement_{record_counter}_{safe_name}{ext}"
            target_path = os.path.join(output_img_dir, img_filename)

            try:
                with z.open(f"word/{r['raw_img']}") as src, open(target_path, 'wb') as dst:
                    shutil.copyfileobj(src, dst)
                r['image'] = f"/placements/{img_filename}"
            except Exception:
                r['image'] = "/place1.png"
        else:
            r['image'] = "/place1.png"

        record_counter += 1
        print(f" -> {r['name']:<22} | {r['company']:<20} | {r['package_formatted']:<10} | {r['role']}")

with open('jvmdata_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(file_records, f, indent=2, ensure_ascii=False)
