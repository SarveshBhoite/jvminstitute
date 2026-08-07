import json
import re

with open('clean_placements_seed.json', 'r', encoding='utf-8') as f:
    placements = json.load(f)

# Build TypeScript object list string
seed_items = []
for p in placements:
    name = json.dumps(p['name'])
    domain = json.dumps(p['domain'])
    placedRole = json.dumps(p['role'])
    company = json.dumps(p['company'])
    package = json.dumps(p['package_formatted'])
    image = json.dumps(p['image'])
    skills = json.dumps(p.get('skills', 'SQL, Python, PySpark, Cloud Data Engineering'))
    category = json.dumps(p['category'])
    isFeatured = "true" if p['package_num'] >= 13.0 else "false"
    testimonial = json.dumps(p['review'])

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

# Replace placement createMany data array
pattern = r'await prisma\.placement\.createMany\(\{\s*data:\s*\[[\s\S]*?\]\s*\}\);'
replacement = f'await prisma.placement.createMany({{\n    data: {placements_ts_array}\n  }});'

new_seed_content = re.sub(pattern, replacement, seed_content)

with open('prisma/seed.ts', 'w', encoding='utf-8') as f:
    f.write(new_seed_content)

print(f"Updated prisma/seed.ts with {len(placements)} placement records (Highest package first!).")
