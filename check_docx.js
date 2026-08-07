const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Run python script using child_process inside node if possible, or read zip in node
try {
  const out = execSync('python extract_all_docx.py', { encoding: 'utf-8' });
  console.log("Python extract output:\n", out);
} catch (e) {
  console.log("Exec error:", e.message);
}
