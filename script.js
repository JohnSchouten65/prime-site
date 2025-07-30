function verificaPrimo(numero) {
  const mod = numero % 6;
  const binario = numero.toString(2).padStart(3, '0');
  const bitFinali = binario.slice(-3);
  const codice = `mod6:${mod}|bit:${bitFinali}`;

  fetch('rules.json')
    .then(response => response.json())
    .then(regole => {
      const risultato = regole[codice];
      const output = document.getElementById('output');
      output.innerHTML = `<h2>Risultato</h2>
        <pre>
Input: ${numero}
Modulo 6: ${mod}
Bit finale (3 bit): ${bitFinali}
Codice: ${codice}

${
  risultato !== undefined
    ? "✅ Il numero è probabile primo secondo la regola.\ndₙ = " + risultato
    : "❌ Nessuna regola trovata per questo codice.\nIl numero è probabilmente composto."
}
        </pre>`;
    });
}
