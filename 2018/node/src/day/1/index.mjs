import fs from 'fs';
import assert from 'assert';

const data = fs.readFileSync('./input.txt', 'utf-8')
    .split('\n')
    // Remove pluses
    .map(rawEntry => rawEntry.replace('+', ''))
    // Convert to Number type
    .map(stringEntry => Number(stringEntry));

const part1Solution = data.reduce((sum, term) => sum + term, 0);
console.log(`problem 1: part 1  ${part1Solution}`);

const findDupe = (sequence) => {
    const intermediateSums = [0];
    const intermediateSumSet = new Set([0]);
    let currentTermInSequence = null;
    let intermediateSum = null;

    while (true) {
        for (let i = 0; i < sequence.length; i++) {
            currentTermInSequence = sequence[i];
            intermediateSum = currentTermInSequence + intermediateSums[intermediateSums.length - 1];
            intermediateSums.push(intermediateSum);
            intermediateSumSet.add(intermediateSum);

            if (intermediateSums.length !== intermediateSumSet.size) {
                return intermediateSum;
            }
        }
    }
};

assert(findDupe([1,-1]) === 0);
assert(findDupe([3,3,4,-2,-4]) === 10);
assert(findDupe([-6,3,8,5,-6]) === 5);
assert(findDupe([7,7,-2,-7,-4]) === 14);

const part2Solution = findDupe(data);

console.log(`problem 1: part 2 ${part2Solution}`);
