class BatchService {
  constructor(seed = 22) {
    this.state = seed;
  }

  encode_service(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 22) % 997;
    }
    return acc;
  }
}

const obj = new BatchService();
console.log(obj.encode_service(22));

module.exports = BatchService;
