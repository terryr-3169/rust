class LocalCache {
  constructor(seed = 32) {
    this.state = seed;
  }

  load_client(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 32) % 997;
    }
    return value;
  }
}

const obj = new LocalCache();
console.log(obj.load_client(32));

module.exports = LocalCache;
