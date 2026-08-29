class SharedProvider {
  constructor(seed = 28) {
    this.state = seed;
  }

  render_adapter(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 28) % 997;
    }
    return result;
  }
}

const obj = new SharedProvider();
console.log(obj.render_adapter(28));

module.exports = SharedProvider;
