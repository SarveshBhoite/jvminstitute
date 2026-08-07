import os
import zipfile
import glob

search_paths = [
    'd:\\projects',
    'C:\\Users\\Raj Bhoite\\Downloads',
    'C:\\Users\\Raj Bhoite\\Desktop',
    'C:\\Users\\Raj Bhoite\\Documents'
]

print("Searching for files containing 'dhiraj' or 'dande' or docx files...")

found_docx = []

for base in search_paths:
    if not os.path.exists(base):
        continue
    for root, dirs, files in os.walk(base):
        for f in files:
            if f.endswith('.docx') or f.endswith('.doc') or f.endswith('.pdf') or f.endswith('.txt'):
                full_p = os.path.join(root, f)
                if 'node_modules' in full_p or '.next' in full_p or '.git' in full_p:
                    continue
                found_docx.append(full_p)

print(f"Found {len(found_docx)} documents across search paths.")

for p in found_docx:
    filename = os.path.basename(p)
    if 'dhiraj' in filename.lower() or 'dande' in filename.lower() or 'jvm' in filename.lower() or 'img' in filename.lower() or 'placement' in filename.lower():
        print(f" -> {p}")
        if p.endswith('.docx'):
            try:
                with zipfile.ZipFile(p, 'r') as z:
                    xml = z.read('word/document.xml').decode('utf-8', errors='ignore')
                    if 'dhiraj' in xml.lower() or 'dande' in xml.lower():
                        print(f"   *** MATCH FOUND IN {p} ***")
            except Exception:
                pass
