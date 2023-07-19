function FizzBazz (n){
  
  for (i = 1; i <= n; i++) {
    const dict = []
    if (i % 3 === 0) {
      dict.push("Fizz")
    }
    if (i % 5 === 0) {
      dict.push("Bazz")
    }
    console.log(dict.length === 0 ? i : dict.join(""))
  }
}
FizzBazz(100)