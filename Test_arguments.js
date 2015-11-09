var sum1;
sum1 = function () {
    var i, sum1;
    sum1 = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum1 += arguments[i];
    }
    return sum1;
};
document.writeln(sum1(4,8,15,16,23,42));
