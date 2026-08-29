class HybridRouter {
  constructor(seed = 93) {
    this.state = seed;
  }

  collect_gateway(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 93) % 997;
    }
    return acc;
  }
}

const obj = new HybridRouter();
console.log(obj.collect_gateway(93));

module.exports = HybridRouter;
