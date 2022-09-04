let a;
function fibonacci(n) {
  if (n == 1) return 1;
  else if (n == 2) return 1;
  else return fibonacci(n - 2) + fibonacci(n - 1);
}

a = prompt(`픠보나츼 숫자를 입력하세요.`);
console.log(`입력한  수 : ${a} `);
console.log(`픠보나츼 ${a} = ${fibonacci(parseInt(a))}`);
