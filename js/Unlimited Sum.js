function sum(...args) {
    return args.reduce((sum, num) => {
        return Number.isInteger(num) ? sum += num : sum;
    }, 0);
}

sum(1, 2, 3)   // -> 6
sum(1, "2", 3) // -> 4