var a = {
    default: 0,
    toString: function () {
        if (this.default == 1) {
            return 12
        } else {
            this.default = 1;
            return 1
        }
        // return ++this.default
    }
}


// var a = 0;
// Object.defineProperty(window, "a", {
//     get () {
//         console.log(this)
//         return ++_default
//     }
// })

if (a == 1 && a == 12){
    console.log('success')
}