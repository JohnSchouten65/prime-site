let rules = {};

fetch('rules.json')
  .then(response => response.json())
  .then(data => { rules = data; })
  .catch(err => console.error("Errore caricamento rules.json", err));

function toBit(n) {
  return n.toString(2).slice(-3).padStart(3, '0');
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
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
    output += isPrime(nextPrime)
      ? "\n✅ Confermato: è realmente PRIMO!"
      : "\n⚠️ Attenzione: il risultato NON è primo.";
  } else {
    output += `\nNessuna regola trovata per questo codice.`;
  }

  
  output += "\n\n" + (isPrime(n)
    ? `✅ ${n} è un numero primo confermato.`
    : `⚠️ ${n} NON è primo secondo la verifica classica.`);

  document.getElementById("output").textContent = output;

}
