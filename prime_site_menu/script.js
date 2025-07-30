function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function checkPrime() {
  const num = parseInt(document.getElementById("numberInput").value);
  const result = isPrime(num) ? num + " è PRIMO" : num + " NON è primo";
  document.getElementById("result").textContent = result;
}

function findNextPrime() {
  let num = parseInt(document.getElementById("numberInput").value);
  do {
    num++;
  } while (!isPrime(num));
  document.getElementById("result").textContent = "Prossimo primo: " + num;
}
