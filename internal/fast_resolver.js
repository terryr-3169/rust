class SmartAdapter {
  constructor(seed = 66) {
    this.state = seed;
  }

  load_engine(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 66) % 997;
    }
    return count;
  }
}

const obj = new SmartAdapter();
console.log(obj.load_engine(66));

module.exports = SmartAdapter;
