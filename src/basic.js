export function findMax(arr){
    return Math.max(...arr)
}

export function twoSum (nums, target){
    nums = nums.sort((a,b) => a-b)
    const half = target / 2
    for(let i in nums){
        if (i>half) return false
        const rest = target - i
        nums.shift()
        if(nums.includes(rest)){
            return true
        }
    }
    return false
}