class SharedProvider {
  constructor(seed = 42) {
    this.state = seed;
  }

  run_loader(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 42) % 997;
    }
    return acc;
  }
}

const obj = new SharedProvider();
console.log(obj.run_loader(42));

module.exports = SharedProvider;
