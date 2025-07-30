function toBitPattern(n) {
  return n.toString(2).padStart(12, '0');
}

function showBitPattern() {
  const n = parseInt(document.getElementById("numberInput").value);
  const pattern = toBitPattern(n);
  document.getElementById("result").textContent = "Pattern binario: " + pattern;
}

function checkPrimeBit() {
  const n = parseInt(document.getElementById("numberInput").value);
  const pattern = toBitPattern(n);
  // Simulazione placeholder predittiva binaria (da sostituire con sistema reale)
  const guess = (pattern.endsWith("1") && n % 2 !== 0);
  document.getElementById("result").textContent = guess
    ? n + " è (probabilmente) PRIMO secondo il pattern binario."
    : n + " NON è primo secondo il pattern.";
}

function findNextPrimeBit() {
  let n = parseInt(document.getElementById("numberInput").value);
  do {
    n++;
  } while (!toBitPattern(n).endsWith("1") || n % 2 === 0);  // logica simulata
  document.getElementById("result").textContent = "Prossimo primo (stimato): " + n;
}
