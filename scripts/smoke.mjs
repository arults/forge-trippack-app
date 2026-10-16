const base = process.env.TRIPPACK_URL || process.argv[2] || "http://localhost:3000";
const paths = ["/", "/sheet", "/start", "/status", "/non-goals", "/trial"];
let ok = 0;
for (const p of paths) {
  const url = base.replace(/\/$/, "") + p;
  try {
    const res = await fetch(url, { redirect: "follow" });
    const pass = res.status >= 200 && res.status < 400;
    console.log(`${pass ? "OK" : "FAIL"} ${res.status} ${p}`);
    if (pass) ok++;
  } catch (e) {
    console.log(`FAIL 000 ${p} ${e.message}`);
  }
}
console.log(`${ok}/${paths.length} OK`);
process.exit(ok === paths.length ? 0 : 1);
