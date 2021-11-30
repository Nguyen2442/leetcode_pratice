/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    let k = nums.length-1
    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] === val) {
            nums[i--] = nums[k--]
            nums.pop()
        }
    }
    
    return k+1
};
nums = [1]
val = 1

console.log(removeElement(nums, val))
