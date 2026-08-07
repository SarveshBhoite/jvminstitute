import os
import hashlib
import glob
import re

img_dir = 'public/placements'
files = glob.glob(os.path.join(img_dir, '*'))

print(f"Total files in {img_dir} before deduplication: {len(files)}")

# 1. Group by file content MD5 hash
hash_map = {}
for f in files:
    if os.path.isfile(f):
        with open(f, 'rb') as fp:
            file_hash = hashlib.md5(fp.read()).hexdigest()
        hash_map.setdefault(file_hash, []).append(f)

removed_count = 0
kept_files = []

for file_hash, file_list in hash_map.items():
    # Sort files by shortest filename or cleanest pattern
    file_list.sort(key=lambda x: (len(os.path.basename(x)), x))
    primary = file_list[0]
    kept_files.append(primary)
    
    # Remove identical duplicate files
    for dup in file_list[1:]:
        print(f"Removing identical duplicate: {os.path.basename(dup)} (Same hash as {os.path.basename(primary)})")
        try:
            os.remove(dup)
            removed_count += 1
        except Exception as e:
            print(f"Error removing {dup}: {e}")

# 2. Rename kept files to clean canonical names (e.g. pranotithorat.jpeg, dhirajdande.png)
remaining_files = glob.glob(os.path.join(img_dir, '*'))
print(f"\nRemaining unique image files after hash deduplication: {len(remaining_files)}")
print(f"Total duplicate files deleted: {removed_count}\n")

print("=== CANONICAL IMAGES READY IN public/placements ===")
for f in sorted(remaining_files):
    name = os.path.basename(f)
    size = os.path.getsize(f)
    print(f" - {name:<35} ({size} bytes)")
