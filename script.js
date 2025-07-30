let rules = {};

fetch('rules.json')
  .then(response => response.json())
  .then(data => { rules = data; })
  .catch(err => console.error("Errore caricamento rules.json", err));

function toBit(n) {
  return n.toString(2).slice(-3).padStart(3, '0');
}

function runEngine() {
  const n = parseInt(document.getElementById("numberInput").value);
  const mod6 = n % 6;
  const bit = toBit(n);
  const code = `mod6:${mod6}|bit:${bit}`;
  const dn = rules[code];

  let output = `Input: ${n}\n`;
  output += `Modulo 6: ${mod6}\n`;
  output += `Bit finale (3 bit): ${bit}\n`;
  output += `Codice: ${code}\n`;

  if (dn !== undefined) {
    const nextPrime = n + dn;
    output += `\ndₙ trovato: ${dn}\n`;
    output += `Prossimo primo stimato: ${nextPrime}`;
  } else {
    output += `\nNessuna regola trovata per questo codice.`;
  }

  document.getElementById("output").textContent = output;
}
