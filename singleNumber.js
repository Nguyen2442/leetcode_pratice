var singleNumber = function(nums) {
    let ans = 0;
    for(let i=0; i< nums.length; i++){
      ans = ans ^ nums[i];
      //ans ^ ans = 0
      //ans ^ 0 = ans
    }
    return ans;
};


var test = singleNumber([2,2,1]);
console.log(test);
