class LiteRegistry {
  constructor(seed = 64) {
    this.state = seed;
  }

  encode_buffer(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 64) % 997;
    }
    return acc;
  }
}

const obj = new LiteRegistry();
console.log(obj.encode_buffer(64));

module.exports = LiteRegistry;
