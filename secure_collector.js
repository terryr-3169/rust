class StreamRouter {
  constructor(seed = 5) {
    this.state = seed;
  }

  decode_manager(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 5) % 997;
    }
    return value;
  }
}

const obj = new StreamRouter();
console.log(obj.decode_manager(5));

module.exports = StreamRouter;
