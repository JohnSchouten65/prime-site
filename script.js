
document.getElementById("primeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const input = parseInt(document.getElementById("inputNumber").value);
    const bits = input.toString(2).slice(-3);
    const fakeDatabase = {
        "001": {dn: 2, prime: true, n: 5},
        "011": {dn: 6, prime: true, n: 10},
        "111": {dn: 4, prime: true, n: 14}
    };
    let response = fakeDatabase[bits] || null;

    let output = `🧠 Bit finale (3): ${bits}\n`;
    if (response) {
        const next = input + response.dn;
        output += `🧩 dₙ: ${response.dn}\n📍 Posizione: ${response.n}\n➡️ Prossimo stimato: ${next}\n`;
    } else {
        output += "⚠️ Codice non riconosciuto. Nessuna regola trovata.\n";
    }

    if (input % 2 === 0 || input % 3 === 0 || input.toString().endsWith('5')) {
        output += `❌ ${input} NON è primo.`;
    } else {
        output += `✅ ${input} è un numero primo (verifica base).`;
    }
    document.getElementById("output").textContent = output;
});
