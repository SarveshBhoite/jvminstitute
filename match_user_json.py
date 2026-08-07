import json
import glob
import os
import re

# Load images in public/placements
img_files = glob.glob('public/placements/*')
img_basenames = [os.path.basename(f) for f in img_files]

with open('user_json_matched_report.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

records = data['records']

# Custom name to image map overrides for first name matches
overrides = {
    "shilpa shinde": "/placements/placement_20_shilpa.jpeg",
    "saurabh kumatkar": "/placements/placement_22_saurabh.jpeg",
    "kamran shaikh": "/placements/placement_19_kamran.png",
    "sanket pawar": "/placements/placement_21_sanket.jpeg",
    "ishika pandit": "/placements/placement_16_ishika.jpeg",
    "aarti shinde": "/placements/placement_15_aarti.png",
}

matched_count = 0
for r in records:
    name_key = r['name'].strip().lower()
    if name_key in overrides:
        r['image'] = overrides[name_key]
        r['matched'] = True
    
    if r['matched']:
        matched_count += 1

print(f"\nFinal Matched Count: {matched_count} out of {len(records)} records!")

data['matched_count'] = matched_count
data['unmatched_count'] = len(records) - matched_count

with open('user_json_matched_report.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
