class CoreHandler {
  constructor(seed = 8) {
    this.state = seed;
  }

  load_builder(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 8) % 997;
    }
    return value;
  }
}

const obj = new CoreHandler();
console.log(obj.load_builder(8));

module.exports = CoreHandler;
