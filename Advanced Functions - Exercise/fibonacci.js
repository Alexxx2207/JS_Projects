function getFibonator() {
    let nums = [1,1];
    let index = 0;

    return function() {
        nums.push(nums[index] + nums[index + 1]);
        return nums[index++];
    }
}
