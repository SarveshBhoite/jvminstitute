import json

new_data = [
  {
    "name": "Kamlesh Gaikwad",
    "domain": "Data Engineering",
    "role": "Senior Associate",
    "company": "Cognizant",
    "package": "17 LPA",
    "package_num": 17.0,
    "package_formatted": "17 LPA",
    "image": "/placements/placement_28_kamleshgaikwad.jpeg",
    "skills": "SQL, Python, PySpark, Cloud Data Engineering, AWS",
    "category": "data_engineering",
    "isFeatured": True,
    "review": "I was already working in the IT industry, but I realized that upgrading my skills was necessary for better growth. JVM Institute helped me learn advanced Data Engineering concepts, cloud technologies, and real-time project implementation. The trainers provided excellent guidance and interview preparation. With continuous practice and support, I gained confidence and secured a better opportunity with a higher package. Thank you JVM Institute for helping me grow professionally."
  },
  {
    "name": "Parth Ghodekar",
    "domain": "Data Engineering",
    "role": "IT Analyst / Data Engineering",
    "company": "TCS (18.25 LPA) / EY (20 LPA)",
    "package": "20 LPA",
    "package_num": 20.0,
    "package_formatted": "20 LPA",
    "image": "/placements/placement_29_parthghodekar.jpeg",
    "skills": "SQL, Python, PySpark, Cloud, Big Data",
    "category": "data_engineering",
    "isFeatured": True,
    "review": "I come from an IT background and wanted to achieve better career growth in Data Engineering. To upgrade my skills, I joined JVM Institute and gained hands-on experience in SQL, Python, PySpark, Cloud, and Big Data technologies. The structured training, mock interviews, and continuous support helped me strengthen my technical knowledge and confidence. With consistent effort and guidance from the JVM team, I secured an offer from TCS as an IT Analyst with 18.25 LPA. Later, I achieved another milestone by receiving another offer from EY with a package of 20 LPA. Thank you JVM Institute for helping me reach the next level in my career. 🚀"
  },
  {
    "name": "Sakshi",
    "domain": "Data Engineering",
    "role": "Data Engineer",
    "company": "Decision NXT",
    "package": "6.25 LPA",
    "package_num": 6.25,
    "package_formatted": "6.25 LPA",
    "image": "/placements/Sakshi.png",
    "skills": "SQL, Python, PySpark, Data Engineering",
    "category": "data_engineering",
    "isFeatured": False,
    "review": "Coming from a fresher background, I was looking for a course that could help me start my IT career. JVM Institute provided excellent training with a step-by-step learning approach. The trainers were always available to clear doubts and guide us throughout the journey. The mock interviews and placement preparation sessions boosted my confidence significantly. Today, I am working as a Data Engineer, and I truly appreciate the support and dedication of the entire JVM team."
  },
  {
    "name": "Bhushan Pandit",
    "domain": "Data Engineering",
    "role": "Senior Data Engineer",
    "company": "O9 Solutions",
    "package": "17.8 LPA",
    "package_num": 17.8,
    "package_formatted": "17.8 LPA",
    "image": "/place1.png",
    "skills": "SQL, Python, PySpark, AWS, Cloud Data Engineering",
    "category": "data_engineering",
    "isFeatured": True,
    "review": "I was working at TCS but felt that my career growth and package progression were limited. I wanted to upgrade my skills and move into a more rewarding role. That's when I joined JVM Institute's Data Engineering course. The training in SQL, Python, PySpark, AWS, and real-time projects helped me build strong technical expertise. The mock interviews and placement support boosted my confidence and prepared me for opportunities in the market. With the guidance of JVM Institute, I successfully switched to a Data Engineering role with a significantly higher package. I am grateful to the entire team for helping me achieve this career transformation."
  },
  {
    "name": "Pratiksha Raut",
    "domain": "Software Engineering",
    "role": "Software Engineer",
    "company": "Harman",
    "package": "12.5 LPA",
    "package_num": 12.5,
    "package_formatted": "12.5 LPA",
    "image": "/placements/placement_33_pratiksharaut.jpeg",
    "skills": "SQL, Python, PySpark, AWS, Software Engineering",
    "category": "data_engineering",
    "isFeatured": False,
    "review": "I joined JVM Institute to upgrade my skills and stay competitive in today's fast-changing IT industry. The Data Engineering course provided hands-on training in SQL, Python, PySpark, AWS, and real-time projects. The trainers were knowledgeable, supportive, and always available to clear doubts. The mock interviews and placement preparation sessions significantly improved my confidence. With the skills I gained at JVM Institute, I was able to explore better career opportunities and achieve professional growth. I highly recommend JVM Institute to anyone looking to upskill and advance their career."
  },
  {
    "name": "Vaishnavi Kadam",
    "domain": "Data Engineering",
    "role": "Senior Data Engineer",
    "company": "Quantiphi",
    "package": "13.25 LPA",
    "package_num": 13.25,
    "package_formatted": "13.25 LPA",
    "image": "/placements/placement_11_vaishnavi.png",
    "skills": "SQL, Python, PySpark, Cloud Data Engineering",
    "category": "data_engineering",
    "isFeatured": True,
    "review": "I wanted to move into a high-demand technology field and JVM Institute made the journey easy. The trainers explained every concept clearly and helped me build strong Data Engineering skills."
  },
  {
    "name": "Sagar Lahane",
    "domain": "Data Engineering",
    "role": "Business Analyst",
    "company": "Cognizant",
    "package": "12.36 LPA",
    "package_num": 12.36,
    "package_formatted": "12.36 LPA",
    "image": "/placements/placement_31_sagarlahane.jpeg",
    "skills": "SQL, Python, PySpark, Data Analytics",
    "category": "data_analytics",
    "isFeatured": False,
    "review": "I enrolled in JVM Institute to enhance my skills and prepare for better opportunities. The personalized attention and hands-on training helped me gain expertise in Data Engineering technologies."
  }
]

with open('clean_placements_seed.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)

names = [item['name'] for item in new_data]
updated = [item for item in existing if item['name'] not in names] + new_data
updated.sort(key=lambda x: x.get('package_num', 0), reverse=True)

with open('clean_placements_seed.json', 'w', encoding='utf-8') as f:
    json.dump(updated, f, indent=2, ensure_ascii=False)

print(f'Successfully updated clean_placements_seed.json with {len(new_data)} new records!')
