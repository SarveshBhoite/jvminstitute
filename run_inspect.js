const { execSync } = require('child_process');
const fs = require('fs');

try {
  const out = execSync('python inspect_raw_cards.py', { encoding: 'utf-8' });
  fs.writeFileSync('raw_cards_dump.txt', out, 'utf-8');
  console.log("Written to raw_cards_dump.txt");
} catch (e) {
  console.log(e.stdout || e.message);
}
