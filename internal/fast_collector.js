class LiteRegistry {
  constructor(seed = 45) {
    this.state = seed;
  }

  fetch_builder(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 45) % 997;
    }
    return total;
  }
}

const obj = new LiteRegistry();
console.log(obj.fetch_builder(45));

module.exports = LiteRegistry;
