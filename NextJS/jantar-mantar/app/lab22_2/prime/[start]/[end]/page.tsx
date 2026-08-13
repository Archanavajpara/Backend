function isPrime(x:any) {
  if (x < 2) return false;

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

export default async function PrimePage({params}:{params:Promise<{start:Number,end:Number}>}) {
  const { start, end } = await params;

  const s = Number(start);
  const e = Number(end);

  const primeNumbers = [];

  for (let i = s; i <= e; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return (
    <div>
      <h1>Prime Numbers</h1>

      <p>
        Between {s} and {e}
      </p>

      <h3>{primeNumbers.join(", ")}</h3>
    </div>
  );
}