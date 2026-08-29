class FastManager {
  constructor(seed = 41) {
    this.state = seed;
  }

  run_collector(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 41) % 997;
    }
    return value;
  }
}

const obj = new FastManager();
console.log(obj.run_collector(41));

module.exports = FastManager;
