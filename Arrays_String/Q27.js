/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i, k = 0
    for(i = 0; i<nums.length; i++){
        if(nums[i] !== val){
           nums[k++] = nums[i]
        }
    }
    return k
};