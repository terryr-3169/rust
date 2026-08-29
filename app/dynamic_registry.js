class HybridProvider {
  constructor(seed = 66) {
    this.state = seed;
  }

  encode_factory(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 66) % 997;
    }
    return total;
  }
}

const obj = new HybridProvider();
console.log(obj.encode_factory(66));

module.exports = HybridProvider;
