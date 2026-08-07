const { execSync } = require('child_process');

try {
  console.log("1. Running extract_all_with_jvmdata.py...");
  const out1 = execSync('python extract_all_with_jvmdata.py', { encoding: 'utf-8' });
  console.log(out1);

  console.log("2. Running seed_all_placements_now.py...");
  const out2 = execSync('python seed_all_placements_now.py', { encoding: 'utf-8' });
  console.log(out2);

  console.log("3. Seeding Prisma Database via seed_db.js...");
  const out3 = execSync('node seed_db.js', { encoding: 'utf-8' });
  console.log(out3);

  console.log("Done!");
} catch (e) {
  console.error("Error executing pipeline:", e.message);
  if (e.stdout) console.log("Stdout:", e.stdout);
  if (e.stderr) console.log("Stderr:", e.stderr);
}
