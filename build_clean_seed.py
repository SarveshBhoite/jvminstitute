import json
import re

with open('extracted_all_placements.json', 'r', encoding='utf-8') as f:
    placements = json.load(f)

# Manual overrides for records where text was long or mixed
overrides = {
    "Parth Ghodekar": {
        "company": "EY / TCS",
        "role": "IT Analyst / Data Engineer",
        "package_num": 20.0,
        "package_formatted": "20 LPA",
        "review": "I come from an IT background and wanted to achieve better career growth in Data Engineering. To upgrade my skills, I joined JVM Institute and gained hands-on experience in SQL, Python, PySpark, Cloud, and Big Data technologies. I secured an offer from TCS as an IT Analyst with 18.25 LPA and later achieved another milestone by receiving an offer from EY with a package of 20 LPA."
    },
    "Vaishnavi Kadam": {
        "company": "Tier-1 Tech MNC",
        "role": "Senior Data Engineer",
        "package_num": 13.25,
        "package_formatted": "13.25 LPA",
        "review": "I wanted to move into a high-demand technology field and JVM Institute made the journey easy. The trainers explained every concept clearly and helped me build strong Data Engineering skills through hands-on projects."
    },
    "Sayali Karpe": {
        "company": "Global IT Solutions",
        "role": "Senior GCP Data Engineer",
        "package_num": 13.0,
        "package_formatted": "13 LPA",
        "review": "I stayed at home for a long time searching for a job but was unable to find the right opportunity. That's when I found JVM Institute and enrolled in their Data Engineering course. The trainers guided me from the basics and helped me build strong technical skills. Today I am successfully placed in the IT industry with 13 LPA."
    },
    "Trupti Musale": {
        "company": "Softenger Pvt. Ltd.",
        "role": "Data Engineer",
        "package_num": 6.0,
        "package_formatted": "6 LPA",
        "review": "Coming from a Commerce background, I never thought I could build a career in the IT industry. After joining JVM Institute, I learned Data Engineering from scratch, including SQL, Python, PySpark, and AWS. I successfully transitioned from Commerce to Data Engineering!"
    },
    "Kamlesh Gaikwad": {
        "company": "Enterprise Tech MNC",
        "role": "Data Engineer",
        "package_num": 10.0,
        "package_formatted": "10 LPA",
        "review": "I was already working in the IT industry, but I realized that upgrading my skills was necessary for better growth. JVM Institute helped me learn advanced Data Engineering concepts, Cloud Technologies, and Real-Time Project implementation."
    },
    "Sagar Lahane": {
        "company": "Enterprise Solutions",
        "role": "Business Analyst",
        "package_num": 10.0,
        "package_formatted": "10 LPA",
        "review": "I enrolled in JVM Institute to enhance my skills and prepare for better opportunities. The personalized attention and hands-on training helped me gain expertise in Data Engineering technologies."
    },
    "Pratiksha Raut": {
        "company": "Harman",
        "role": "Software Engineer",
        "package_num": 10.0,
        "package_formatted": "10 LPA",
        "review": "JVM Institute provided excellent hands-on projects and interview preparation. The supportive learning environment enabled me to crack my interview at Harman."
    },
    "Mansi Chaudhary": {
        "company": "Bitwise",
        "role": "Data Engineer",
        "package_num": 10.0,
        "package_formatted": "10 LPA",
        "review": "The trainers focused on practical implementation rather than just theory. The placement support and mock interviews played a huge role in my success at Bitwise."
    },
    "Jayshree": {
        "company": "EY",
        "role": "Senior Consultant",
        "package_num": 13.5,
        "package_formatted": "13.5 LPA",
        "review": "I come from a non-IT background and was looking for a way to build a career in IT. After joining JVM Institute's Data Engineering course, my journey completely changed. The live classes and mock interviews helped me secure a 13.5 LPA offer at EY."
    }
}

clean_placements = []
for p in placements:
    name = p['name']
    if name in overrides:
        p.update(overrides[name])

    # Category matching
    role_lower = p['role'].lower()
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

    p['category'] = cat
    p['domain'] = dom
    clean_placements.append(p)

# Sort strictly by package_num descending
clean_placements.sort(key=lambda x: x['package_num'], reverse=True)

print(f"\nFinal Verified Seed Records ({len(clean_placements)} Total):")
for i, p in enumerate(clean_placements, start=1):
    print(f"{i:2d}. {p['name']:<22} | {p['company']:<22} | {p['package_formatted']:<10} | {p['role']}")

with open('clean_placements_seed.json', 'w', encoding='utf-8') as f:
    json.dump(clean_placements, f, indent=2, ensure_ascii=False)

print("\nSaved to clean_placements_seed.json")
