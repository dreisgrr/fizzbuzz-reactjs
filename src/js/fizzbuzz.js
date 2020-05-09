class FizzBuzz {
  constructor(rules, start, end) {
    this.rules = rules;
    this.start = start;
    this.end = end;
  }

  process() {
    for (var i = this.start; i <= this.end; i++) {
      const result = this.fizzbuzzit(i);
      console.log(result);
    }
  }

  fizzbuzzit(number) {
    let matches = "";
    this.rules.forEach((rule) => {
      matches = matches + rule.checkDivisibility(number);
    });
    if (matches.length === 0) return number;
    else return matches;
  }
}

class Rules {
  constructor(number, message) {
    this.number = number;
    this.message = message;
  }
  checkDivisibility(input) {
    let message = "";
    if (input % this.number === 0) {
      message = this.message;
    }
    return message;
  }
}

var sampleFizzBuzz = new FizzBuzz(
  [new Rules(3, "Fizz"), new Rules(5, "Buzz")],
  1,
  100
);

sampleFizzBuzz.process();
