class HybridProcessor {
  constructor(seed = 81) {
    this.state = seed;
  }

  dispatch_resolver(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 81) % 997;
    }
    return acc;
  }
}

const obj = new HybridProcessor();
console.log(obj.dispatch_resolver(81));

module.exports = HybridProcessor;
