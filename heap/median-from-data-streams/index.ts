/**
 * const { PriorityQueue, MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class MedianFinder {
  maxHeap = new PriorityQueue((a: number, b: number) => b - a);
  minHeap = new PriorityQueue((a: number, b: number) => a - b);
  constructor() {}

  /**
   *
   * @param {number} num
   * @return {void}
   */
  addNum(num: number): void {
    console.log("adding", num);
    if (this.maxHeap.isEmpty() || num <= this.maxHeap.front()) {
      this.maxHeap.enqueue(num);
    } else {
      this.minHeap.enqueue(num);
    }
    if (this.minHeap.size() > this.maxHeap.size() + 1) {
      this.maxHeap.enqueue(this.minHeap.dequeue());
    } else if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.enqueue(this.maxHeap.dequeue());
    }
    console.log(
      "left",
      this.maxHeap.toArray(),
      "right",
      this.minHeap.toArray()
    );
  }

  /**
   * @return {number}
   */
  findMedian(): number {
    if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.front();
    } else if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.front();
    } else {
      return (this.maxHeap.front() + this.minHeap.front()) / 2;
    }
  }
}
