// still two pointers the slow fast technique

function removeDuplicates(nums: number[]): number {
    if(nums.length === 0) return 0
    let slow: number = 1

    for(let fast: number = 1; fast < nums.length; fast++){
        if(nums[fast] !== nums[fast-1]){
            slow++
            nums[slow] = nums[fast]
        }
    }
    return slow 
}

const numsInput: number[] = [1,2,3,3,5,7,7,9,]
console.log(removeDuplicates(numsInput))


// fast and slow pointers
//tortise and hare algorithm
function findMiddle(nums: number[]):number{
    let slow = 0
    let fast = 0
    while(fast<nums.length&&fast+1 <nums.length){
        slow = slow+1
        fast = fast+2
    }
    return nums[slow]
}