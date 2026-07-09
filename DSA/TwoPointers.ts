
function getTarget(nums: number[], target: number): boolean {

let left = 0;
let right = nums.length - 1;

while (left < right) {
    let total = nums[left] + nums[right]
    if (total === target){
        return true
    }else if(total < target){
       left++;
    }else{
       right--;
    }
}
    
    return false;

}


let nums: number[] = [1, 4, 5, 7, 3]
let result = getTarget(nums, 10)
console.log(result)

function isPalindrome(s: string): boolean {
let left = 0;
const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
let right = cleaned.length - 1;

while (left < right){

    if (cleaned[left] !== cleaned[right]){
    return false
    } else {
    left++;
    right--;
    }
    }
    return true;
}
    
let s: string = "racecar";

console.log(isPalindrome(s))