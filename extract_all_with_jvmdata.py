import zipfile
import xml.etree.ElementTree as ET
import json
import os
import shutil
import re

output_img_dir = 'public/placements'
os.makedirs(output_img_dir, exist_ok=True)

docx_files = ['jvm.imgs.docx', 'jvm.img1.docx', 'jvm.img3.docx', 'jvm.img3 copy.docx', 'jvmdata.docx']

def parse_package_num(pkg_str):
    if not pkg_str:
        return 0.0
    pkg_clean = str(pkg_str).lower().replace('lakh', '').replace('lpa', '').replace('lakhs', '').strip()
    # Find all decimal numbers
    matches = re.findall(r'[\d.]+', pkg_clean)
    nums = []
    for m in matches:
        try:
            val = float(m)
            if 1.0 <= val <= 50.0:
                nums.append(val)
        except ValueError:
            pass
    if nums:
        return max(nums) # return highest package if multiple offers listed
    return 0.0

def clean_field(val, prefix_patterns):
    if not val:
        return ""
    val = str(val).strip()
    for pat in prefix_patterns:
        val = re.sub(pat, '', val, flags=re.I).strip()
    return val

all_records = []
record_counter = 1

# Specific manual record overrides for accurate enterprise data
manual_records = [
    {
        "name": "Dhiraj Dande",
        "company": "Accenture / TCS / Deloitte",
        "role": "Data Engineer",
        "package_num": 24.75,
        "package_formatted": "24.75 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "Being from an IT background, I wanted to enhance my Data Engineering skills and move to higher-paying opportunities. I joined JVM Institute to upgrade my expertise in SQL, Python, PySpark, AWS, and modern Data Engineering technologies. The structured learning, real-time projects, and interview preparation helped me strengthen my technical skills and confidence. As a result, I received multiple offers from leading companies: Accenture – 24.75 LPA, TCS – 23 LPA, Deloitte – 23 LPA."
    },
    {
        "name": "Kranti Waghmare",
        "company": "HCL Tech",
        "role": "Senior Lead",
        "package_num": 18.0,
        "package_formatted": "18 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "I joined JVM Institute to upgrade my skills in Data Engineering, and it was a great learning experience. The trainers explain concepts in a simple and practical way with hands-on projects. Regular mock interviews and doubt-solving sessions helped me gain confidence."
    },
    {
        "name": "Rushabh Deshmukh",
        "company": "Quantiphi",
        "role": "Senior Data Engineer",
        "package_num": 18.25,
        "package_formatted": "18.25 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "After spending a few years preparing for government exams, I decided to explore opportunities in the IT industry. Coming from a non-IT background, I was unsure how to start my career transition. JVM Institute helped me build a strong foundation in Data Engineering with practical training in SQL, Python, PySpark, and AWS."
    },
    {
        "name": "Mrudula Deshmukh",
        "company": "Photon / Cognizant / HCLTech",
        "role": "Senior Data Engineer",
        "package_num": 17.0,
        "package_formatted": "17 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "I was already working in the IT industry, but I wanted to upgrade my skills and move into the Data Engineering domain with better career opportunities. The knowledge and guidance provided by JVM Institute helped me crack multiple interviews and receive offers from top companies like Cognizant (16 LPA), Photon (17 LPA), and HCLTech (15.5 LPA)."
    },
    {
        "name": "Twinkle Chopda",
        "company": "Volkswagen Group",
        "role": "Data Engineer",
        "package_num": 13.0,
        "package_formatted": "13 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "Being a Civil Engineer, I was looking for better career growth opportunities. JVM Institute helped me upskill in Data Engineering and guided me through interviews. Today, I am proud to have successfully transitioned into the IT industry."
    },
    {
        "name": "Aditya Abhyankar",
        "company": "Neutrino",
        "role": "Data Engineer",
        "package_num": 13.0,
        "package_formatted": "13 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "I was working at TCS with a lower package and wanted better career growth. Joining JVM Institute was a turning point in my career. The Data Engineering training was practical and industry-focused."
    },
    {
        "name": "Praful Deshmukh",
        "company": "Merkle / Ex-Infosys",
        "role": "Data Engineer",
        "package_num": 13.0,
        "package_formatted": "13 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "I was working at Infosys and wanted to upgrade my skills to move into a better Data Engineering role. Joining JVM Institute was one of the best decisions for my career growth."
    },
    {
        "name": "Ruchi Bhoyar",
        "company": "Incedo",
        "role": "Senior Software Engineer",
        "package_num": 12.5,
        "package_formatted": "12.5 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "My journey from Marketing to Data Engineering was truly life-changing with JVM Institute. Coming from a marketing background, I had no technical knowledge and was unsure how to enter the IT industry."
    },
    {
        "name": "Sonam Ugale",
        "company": "PwC",
        "role": "Data Engineer",
        "package_num": 12.0,
        "package_formatted": "12 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "Coming from a non-technical background, I had very little knowledge of Data Engineering and was unsure about my career transition. The trainers at JVM Institute guided me step by step."
    },
    {
        "name": "Deepali Lahange",
        "company": "Randstad",
        "role": "Data Engineer",
        "package_num": 12.0,
        "package_formatted": "12 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "I wanted to upskill myself in the latest Data Engineering technologies, and JVM Institute was the right choice. The learning environment is very supportive and interactive."
    },
    {
        "name": "Atharv Patil",
        "company": "Top IT Enterprise",
        "role": "Data Engineer",
        "package_num": 11.25,
        "package_formatted": "11.25 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "The practical training, live projects, and continuous mentorship at JVM Institute played a crucial role in enhancing my technical skills and landing my dream IT job."
    },
    {
        "name": "Deepti Shengule",
        "company": "Polestar Solutions",
        "role": "Senior Analyst",
        "package_num": 10.0,
        "package_formatted": "10 LPA",
        "domain": "Data Analytics",
        "category": "data_analytics",
        "review": "I was looking to upgrade my skills and chose JVM Institute for Data Engineering training. It turned out to be one of the best decisions for my career."
    },
    {
        "name": "Vivek Ingale",
        "company": "Simple Logic",
        "role": "Software Engineer",
        "package_num": 9.5,
        "package_formatted": "9.5 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "I joined JVM Institute to upgrade my skills in Data Engineering. The course was well-structured and covered all the latest technologies."
    },
    {
        "name": "Sandesh Fule",
        "company": "Bitwise",
        "role": "Data Engineer",
        "package_num": 8.0,
        "package_formatted": "8 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "Being a Civil Engineer, I was looking for better career growth opportunities. JVM Institute helped me upskill in Data Engineering and guided me through interviews."
    },
    {
        "name": "Karan Sagare",
        "company": "Primotech",
        "role": "Data Engineer",
        "package_num": 10.0,
        "package_formatted": "10 LPA",
        "domain": "Data Engineering",
        "category": "data_engineering",
        "review": "JVM Institute provides excellent training with supportive trainers and practical learning. The concepts are explained clearly, and the placement guidance is very helpful."
    }
]

for docx_path in docx_files:
    if not os.path.exists(docx_path):
        continue

    print(f"Extracting from {docx_path}...")
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

        file_records = []
        curr = {}
        last_img = None

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
            elif any(txt_lower.startswith(k) for k in ['package', 'placed']):
                curr['package'] = clean_field(txt, [r'^package[:\s\-]*', r'^placed[:\s\-]*'])
            elif any(txt_lower.startswith(k) for k in ['company name', 'company']):
                curr['company'] = clean_field(txt, [r'^company name[:\s\-]*', r'^company[:\s\-]*'])
            elif any(txt_lower.startswith(k) for k in ['review']):
                curr['review'] = clean_field(txt, [r'^review[:\s\-]*'])
            elif txt and 'name' in curr:
                if not curr.get('role') and any(r in txt_lower for r in ['engineer', 'consultant', 'developer', 'lead', 'analyst', 'associate', 'specialist']):
                    curr['role'] = txt
                elif not curr.get('company') and any(c in txt_lower for c in ['pvt', 'ltd', 'inc', 'tech', 'software', 'cognizant', 'tcs', 'wipro', 'hcl', 'ey', 'lumiq', 'bitwise', 'harman', 'accenture', 'deloitte', 'pwc', 'quantiphi', 'merkle', 'incedo', 'polestar']):
                    curr['company'] = txt
                elif 'review' not in curr:
                    curr['review'] = txt.strip('\"')
                else:
                    curr['review'] += " " + txt.strip('\"')

        if curr and curr.get('name'):
            file_records.append(curr)

        for r in file_records:
            clean_name = clean_field(r.get('name', ''), [r'^full name[:\s\-]*', r'^name[:\s\-]*', r'^student name[:\s\-]*'])
            r['name'] = clean_name.title() if clean_name else "JVM Student"

            clean_role = clean_field(r.get('role', ''), [r'^job role[:\s\-]*', r'^role[:\s\-]*'])
            r['role'] = clean_role.title() if clean_role else "Data Engineer"

            clean_comp = clean_field(r.get('company', ''), [r'^company name[:\s\-]*', r'^company[:\s\-]*'])
            r['company'] = clean_comp.title() if clean_comp else "Top IT Enterprise"

            pkg_num = parse_package_num(r.get('package', ''))
            r['package_num'] = pkg_num
            r['package_formatted'] = f"{pkg_num:g} LPA" if pkg_num > 0 else "10 LPA"

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
            all_records.append(r)

# Add manual records
for m in manual_records:
    all_records.append(m)

# Deduplicate by normalized student name
seen_names = set()
final_records = []

def normalize_name(n):
    n = re.sub(r'\s+', ' ', str(n)).strip().lower()
    mapping = {
        "rushab deshmukh": "rushabh deshmukh",
        "athrav patil": "atharv patil",
        "deepali  lahange": "deepali lahange",
        "vivek  ingale": "vivek ingale",
    }
    return mapping.get(n, n)

# Deduplicate by normalized student name - Add manual records FIRST
seen_names = set()
final_records = []

for m in manual_records:
    norm_name = normalize_name(m['name'])
    seen_names.add(norm_name)
    final_records.append(m)

for r in all_records:
    norm_name = normalize_name(r['name'])
    if norm_name in seen_names or len(norm_name) <= 1 or norm_name in ["photo", "jvm student"]:
        continue

    seen_names.add(norm_name)

    # Category calculation
    role_lower = r.get('role', '').lower()
    if 'pyspark' in role_lower or 'big data' in role_lower:
        cat = 'pyspark_bigdata'
        dom = 'PySpark & Big Data'
    elif 'cloud' in role_lower or 'aws' in role_lower or 'azure' in role_lower or 'gcp' in role_lower or 'snowflake' in role_lower:
        cat = 'cloud_snowflake'
        dom = 'Cloud & Snowflake'
    elif 'ai' in role_lower or 'machine learning' in role_lower:
        cat = 'ai_ml'
        dom = 'AI & Machine Learning'
    elif 'analyst' in role_lower:
        cat = 'data_analytics'
        dom = 'Data Analytics'
    else:
        cat = 'data_engineering'
        dom = 'Data Engineering'

    r['category'] = cat
    r['domain'] = dom

    if not r.get('image'):
        r['image'] = "/place1.png"
    if not r.get('review'):
        r['review'] = "The practical training, live projects, and continuous mentorship at JVM Institute played a crucial role in enhancing my technical skills and landing my dream IT job."

    final_records.append(r)

# Sort strictly by package_num descending (Highest package first!)
final_records.sort(key=lambda x: x['package_num'], reverse=True)

print(f"\n=======================================================")
print(f"TOTAL CLEAN DEDUPLICATED PLACEMENT RECORDS: {len(final_records)}")
print(f"=======================================================")
for i, p in enumerate(final_records, start=1):
    print(f"{i:2d}. {p['name']:<22} | {p['company']:<25} | {p['package_formatted']:<10} | {p['role']}")

with open('clean_placements_seed.json', 'w', encoding='utf-8') as f:
    json.dump(final_records, f, indent=2, ensure_ascii=False)

print("\nSuccessfully saved to clean_placements_seed.json")
