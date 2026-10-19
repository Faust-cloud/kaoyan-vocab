// 把简单基础词两大块按约 80 词拆成小单元(Unit 1 … 15)
(function(){
  const SIZE = 80;
  const src = ["s1", "s2"].map(id => UNITS.find(u => u.id === id)).filter(Boolean);
  if (!src.length) return;
  const at = UNITS.indexOf(src[0]);
  const out = [];
  src.forEach(u => {
    const total = u.sections.reduce((n, s) => n + s.w.length, 0);
    const per = Math.ceil(total / Math.max(1, Math.round(total / SIZE)));
    let cur = null;
    u.sections.forEach(s => {
      for (let i = 0; i < s.w.length; ){
        if (!cur || cur.n >= per){ cur = { n: 0, sections: [] }; out.push(cur); }
        const take = s.w.slice(i, i + per - cur.n);
        cur.sections.push(Object.assign({}, s, { w: take }));
        cur.n += take.length; i += take.length;
      }
    });
  });
  const units = out.map((c, k) => ({ id: "s" + String(k + 1).padStart(2, "0"), name: "Unit " + (k + 1), tag: "简单基础词", sections: c.sections }));
  src.forEach(u => UNITS.splice(UNITS.indexOf(u), 1));
  UNITS.splice(at, 0, ...units);
})();
