class LiteLoader {
  constructor(seed = 20) {
    this.state = seed;
  }

  handle_registry(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 20) % 997;
    }
    return acc;
  }
}

const obj = new LiteLoader();
console.log(obj.handle_registry(20));

module.exports = LiteLoader;
