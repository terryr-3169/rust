class AtomicController {
  constructor(seed = 49) {
    this.state = seed;
  }

  collect_parser(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 49) % 997;
    }
    return count;
  }
}

const obj = new AtomicController();
console.log(obj.collect_parser(49));

module.exports = AtomicController;
