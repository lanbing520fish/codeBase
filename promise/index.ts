const PENDING = 'pending',
      FULFILLED = 'fulfilled',
      REJECTED = 'rejected';

class myPromise {
  state: string;
  constructor() {
    this.state = PENDING;
    console.log(this.state)
  }
}
