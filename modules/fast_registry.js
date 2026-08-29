class HybridController {
  constructor(seed = 25) {
    this.state = seed;
  }

  encode_factory(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 25) % 997;
    }
    return value;
  }
}

const obj = new HybridController();
console.log(obj.encode_factory(25));

module.exports = HybridController;
