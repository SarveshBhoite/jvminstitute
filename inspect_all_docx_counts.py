import zipfile
import xml.etree.ElementTree as ET
import glob

docx_files = glob.glob("*.docx")

print(f"Found docx files: {docx_files}")

for docx_path in docx_files:
    try:
        with zipfile.ZipFile(docx_path, 'r') as z:
            doc_xml = z.read('word/document.xml')
            doc_tree = ET.fromstring(doc_xml)
            namespaces = {
                'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
            }
            all_p = doc_tree.findall('.//w:p', namespaces)
            all_text = "".join([t.text for t in doc_tree.findall('.//w:t', namespaces) if t.text])
            has_dhiraj = "dhiraj" in all_text.lower() or "dande" in all_text.lower()
            print(f"\nFile: {docx_path}")
            print(f"  Size: {len(doc_xml)} bytes | Total <w:p>: {len(all_p)}")
            print(f"  Contains 'dhiraj' or 'dande': {has_dhiraj}")
            
            # Search for all names in this docx
            names = []
            for p in all_p:
                txt = "".join([t.text for t in p.findall('.//w:t', namespaces) if t.text]).strip()
                if any(txt.lower().startswith(k) for k in ["full name", "name", "student name", "candidate"]):
                    names.append(txt)
            print(f"  Extracted name labels ({len(names)}): {names}")
    except Exception as e:
        print(f"Error reading {docx_path}: {e}")
