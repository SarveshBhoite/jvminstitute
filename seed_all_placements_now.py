import json

with open('clean_placements_seed.json', 'r', encoding='utf-8') as f:
    placements = json.load(f)

# Sort descending by package_num
placements.sort(key=lambda x: x['package_num'], reverse=True)

seed_items = []
for p in placements:
    name = json.dumps(p['name'])
    domain = json.dumps(p.get('domain', 'Data Engineering'))
    placedRole = json.dumps(p.get('role', 'Data Engineer'))
    company = json.dumps(p.get('company', 'MNC'))
    package = json.dumps(p.get('package_formatted', f"{p['package_num']} LPA"))
    image = json.dumps(p.get('image', '/place1.png'))
    skills = json.dumps(p.get('skills', 'SQL, Python, PySpark, Cloud Data Engineering'))
    category = json.dumps(p.get('category', 'data_engineering'))
    isFeatured = "true" if p['package_num'] >= 13.0 else "false"
    testimonial = json.dumps(p.get('review', 'Excellent training and placement support at JVM Institute.'))

    item_str = f"""      {{
        name: {name},
        domain: {domain},
        placedRole: {placedRole},
        company: {company},
        package: {package},
        image: {image},
        skills: {skills},
        category: {category},
        isFeatured: {isFeatured},
        testimonial: {testimonial},
      }}"""
    seed_items.append(item_str)

placements_ts_array = "[\n" + ",\n".join(seed_items) + "\n    ]"

with open('prisma/seed.ts', 'r', encoding='utf-8') as f:
    seed_content = f.read()

# Replace between // Seed Placements and // Seed Courses
start_idx = seed_content.find("  // Seed Placements from jvm.imgs.docx")
end_idx = seed_content.find("  // Seed Courses", start_idx)

if start_idx != -1 and end_idx != -1:
    new_placement_block = f"""  // Seed Placements from jvm.imgs.docx
  await prisma.placement.deleteMany();
  await prisma.placement.createMany({{
    data: {placements_ts_array}
  }});

"""
    new_seed_content = seed_content[:start_idx] + new_placement_block + seed_content[end_idx:]
    with open('prisma/seed.ts', 'w', encoding='utf-8') as f:
        f.write(new_seed_content)
    print(f"Successfully updated prisma/seed.ts with all {len(placements)} placements!")
else:
    print("Could not find placement markers in prisma/seed.ts!")
