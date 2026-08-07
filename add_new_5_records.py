import json
import glob
import os
import re

new_records_json = """
[
  {
    "name": "Trupti Musale",
    "jobRole": "Data Engineer",
    "company": "Softenger Pvt. Ltd.",
    "packageLPA": 6,
    "review": "Coming from a Commerce background, I never thought I could build a career in the IT industry. I was looking for better career opportunities but didn't know where to start. After joining JVM Institute, I learned Data Engineering from scratch, including SQL, Python, PySpark, and AWS. The trainers were very supportive and made complex concepts easy to understand. The real-time projects, mock interviews, and placement assistance helped me gain confidence. With the guidance of JVM Institute, I successfully transitioned from Commerce to Data Engineering and secured a great job opportunity. Thank you, JVM Institute, for helping me transform my career."
  },
  {
    "name": "Mansi Chaudhary",
    "jobRole": "Data Engineer",
    "company": "Bitwise",
    "packageLPA": 10,
    "review": "Coming from a marketing background, I always wanted to build a career in the IT industry but didn't know where to start. Joining JVM Institute was the best decision I made. The Data Engineering course was designed in a simple and practical way, making it easy for a non-technical person like me to learn SQL, Python, PySpark, and AWS. The trainers provided constant support, mock interviews, and real-time project experience. With their guidance, I successfully transitioned from Marketing to Data Engineering and secured a great job opportunity with a much better package. Thank you, JVM Institute, for helping me transform my career."
  },
  {
    "name": "Durgesh Jadhav",
    "jobRole": "Data Engineer",
    "company": "Ascentt",
    "packageLPA": 10,
    "review": "As a non-IT graduate, I had very little technical knowledge when I joined JVM Institute. The trainers were incredibly supportive and ensured that every concept was understood clearly. The hands-on projects, assignments, and mock interviews prepared me for real-world challenges. The placement team guided me throughout the process. Today, I am working as a Data Engineer and enjoying a rewarding career in IT."
  },
  {
    "name": "Deepti Shengule",
    "jobRole": "Senior Analyst",
    "company": "Polestar Solution",
    "packageLPA": 10,
    "review": "I was looking to upgrade my skills and chose JVM Institute for Data Engineering training. It turned out to be one of the best decisions for my career. The course content was industry-oriented and easy to understand. The trainers provided personal attention and continuous support. The practical projects helped me gain real-time experience. I became more confident in handling technical interviews. I would definitely recommend JVM Institute to others."
  },
  {
    "name": "Prasanth",
    "jobRole": "Software Developer",
    "company": "TCS",
    "packageLPA": 4,
    "review": "Before joining JVM Institute, I had basic technical knowledge but lacked the practical skills required for a Data Engineering career. The trainers guided me through SQL, Python, PySpark, and Cloud technologies with real-time projects. The personalized attention and regular mock interviews boosted my confidence. The placement support was excellent throughout the journey. Today, I am working as a Data Engineer and grateful to JVM Institute for helping me achieve my career goals."
  }
]
"""

# Image Map for new records
img_map = {
    "trupti musale": "/placements/placement_27_truptimusale.png",
    "mansi chaudhary": "/placements/placement_32_mansichaudhary.jpeg",
    "durgesh jadhav": "/placements/placement_34_durgeshjadhav.jpeg",
    "deepti shengule": "/placements/placement_52_deeptishengule.jpeg",
    "prasanth": "/placements/placement_37_prasanth.png"
}

with open('user_json_matched_report.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

existing_records = data['records']

# Deduplicate dict keyed by clean name
records_dict = {}
for r in existing_records:
    clean_k = re.sub(r'\s+', '', r['name'].lower())
    records_dict[clean_k] = r

new_items = json.loads(new_records_json)

for item in new_items:
    name = item['name'].strip()
    clean_k = re.sub(r'\s+', '', name.lower())
    pkg = float(item.get('packageLPA', 10.0))
    img_key = name.lower()
    img_path = img_map.get(img_key, "/place1.png")
    
    rec = {
        "name": name,
        "role": item.get('jobRole', 'Data Engineer'),
        "company": str(item.get('company', 'Top IT Enterprise')),
        "package_num": pkg,
        "package_formatted": f"{pkg:g} LPA",
        "review": item.get('review', ''),
        "image": img_path,
        "matched": True
    }
    records_dict[clean_k] = rec

# Convert back to list and sort by package_num descending
all_updated = list(records_dict.values())
all_updated.sort(key=lambda x: x['package_num'], reverse=True)

# Write updated report
data['total'] = len(all_updated)
data['matched_count'] = len(all_updated)
data['unmatched_count'] = 0
data['records'] = all_updated

with open('user_json_matched_report.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

# Write clean_placements_seed.json
seed_list = []
for r in all_updated:
    seed_list.append({
        "name": r['name'],
        "domain": "Data Engineering",
        "role": r['role'],
        "company": r['company'],
        "package": r['package_formatted'],
        "package_num": r['package_num'],
        "package_formatted": r['package_formatted'],
        "image": r['image'],
        "skills": "SQL, Python, PySpark, Cloud Data Engineering",
        "category": "data_engineering",
        "isFeatured": r['package_num'] >= 13.0,
        "review": r['review']
    })

with open('clean_placements_seed.json', 'w', encoding='utf-8') as f:
    json.dump(seed_list, f, indent=2, ensure_ascii=False)

print(f"Successfully merged new records! Total clean unique placement records: {len(seed_list)}")
