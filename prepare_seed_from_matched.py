import json

with open('user_json_matched_report.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

records = report['records']

seed_list = []
for r in records:
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

print(f"Written {len(seed_list)} records to clean_placements_seed.json")
