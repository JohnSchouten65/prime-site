let rules = {};

fetch('rules.json')
  .then(response => response.json())
  .then(data => { rules = data; });

function getBitmask3(k) {
  return k.toString(2).padStart(3, '0').slice(-3);
}

function process() {
  const k = parseInt(document.getElementById('inputK').value);
  const mod6 = k % 6;
  const bit = getBitmask3(k);
  const key = `mod6:${mod6}|bit:${bit}`;
  const dn = rules[key];

  let output = `k = ${k}\nmod6 = ${mod6}\nbitmask3 = ${bit}\nchiave = ${key}\n`;

  if (dn !== undefined) {
    const next = k + dn;
    output += `dₙ = ${dn}\nProssimo primo stimato: ${next}`;
    document.getElementById('result').textContent = `Prossimo primo: ${next}`;
  } else {
    output += "❌ Chiave non trovata nei dati.";
    document.getElementById('result').textContent = "Chiave non trovata.";
  }

  document.getElementById('debugOutput').textContent = output;
}
