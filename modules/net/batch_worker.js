class BatchEngine {
  constructor(seed = 40) {
    this.state = seed;
  }

  parse_gateway(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 40) % 997;
    }
    return result;
  }
}

const obj = new BatchEngine();
console.log(obj.parse_gateway(40));

module.exports = BatchEngine;
