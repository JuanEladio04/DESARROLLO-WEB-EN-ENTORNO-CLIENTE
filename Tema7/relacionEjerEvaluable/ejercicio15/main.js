Math.mcd = function(a, b) {
    if (b == 0) {
        return a;
    } else {
        return Math.mcd(b, a % b);
    }
};

Math.mcm = function(a, b) {
    return (a * b) / Math.mcd(a, b);
};
