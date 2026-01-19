var createCounter = function(n) {
    var factor=0;
    return function() {
        return n+(factor++);
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */