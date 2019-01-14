function square(s) {
    if ((typeof s) == "string") {
        return s.length*s.legth;
    }
    else {
        return -1;
    }
}

module.exports = square;