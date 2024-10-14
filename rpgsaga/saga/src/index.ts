export function calc(a: number, b: number, x: number): number {
  return (a * Math.pow(x, 1 / 3) - b * (Math.log(x) / Math.log(5))) / Math.pow(Math.log10(x - 1), 3);
}

export function TaskA(xn: number, xk: number, a1: number, b1: number, deltax: number): number[] {
  const answers1: number[] = [];
  for (let x = xn; x <= xk; x += deltax) {
    const y = calc(a1, b1, x);
    answers1.push(y);
  }
  return answers1;
}

export function TaskB(a2: number, b2: number, znachX: number[]): number[] {
  const answers2: number[] = [];
  for (const x of znachX) {
    const y = calc(a2, b2, x);
    answers2.push(y);
  }
  return answers2;
}
  
function main() {

    const a1 = TaskA(1.5, 3.5, 4.1, 2.7, 0.4);
    const a2 = TaskB(4.1, 2.7, [1.9, 2.15, 2.34, 2.74, 3.16]);
    console.log(a1);
    console.log(a2);

}
  
main();