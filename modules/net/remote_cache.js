class HybridRouter {
  constructor(seed = 12) {
    this.state = seed;
  }

  collect_processor(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 12) % 997;
    }
    return total;
  }
}

const obj = new HybridRouter();
console.log(obj.collect_processor(12));

module.exports = HybridRouter;
