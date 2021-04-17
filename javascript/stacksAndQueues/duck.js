const { Queue } = require("./stacks-and-queues");

const DuckDuckGoose = (list, k) => {
  let queue = new Queue();
  let queue2 = new Queue();
  for (let i = 0; i < k; i++) {
    for (let n = 0; n < list.length; n++) {
      if (n === k) queue2.enqueue(list[n]);
      else {
        queue.enqueue(list[n]);
      }
    }
  }
  return queue2.peek();
};

console.log(DuckDuckGoose(["A", "B", "C", "D", "E"], 4));
