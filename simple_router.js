class BatchManager {
  constructor(seed = 68) {
    this.state = seed;
  }

  build_builder(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 68) % 997;
    }
    return value;
  }
}

const obj = new BatchManager();
console.log(obj.build_builder(68));

module.exports = BatchManager;
