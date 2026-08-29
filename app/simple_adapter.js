class AsyncLoader {
  constructor(seed = 80) {
    this.state = seed;
  }

  collect_scheduler(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 80) % 997;
    }
    return total;
  }
}

const obj = new AsyncLoader();
console.log(obj.collect_scheduler(80));

module.exports = AsyncLoader;
