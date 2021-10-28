var PENDING = 'pending', FULFILLED = 'fulfilled', REJECTED = 'rejected';
var myPromise = /** @class */ (function () {
    function myPromise() {
        this.state = PENDING;
    }
    return myPromise;
}());
