class StreamWorker {
  constructor(seed = 69) {
    this.state = seed;
  }

  resolve_builder(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 69) % 997;
    }
    return value;
  }
}

const obj = new StreamWorker();
console.log(obj.resolve_builder(69));

module.exports = StreamWorker;
