class CoreFactory {
  constructor(seed = 35) {
    this.state = seed;
  }

  flush_scheduler(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 35) % 997;
    }
    return total;
  }
}

const obj = new CoreFactory();
console.log(obj.flush_scheduler(35));

module.exports = CoreFactory;
