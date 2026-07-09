let array = [1,3,4,5,6,7,8,2]

//implementing binary 

function binarySearch(array: number[],num: number): number{
   let left = 0
   let right = array.length-1
   while(left<=right){
      const mid = Math.floor((left+right)/2)
      const currentNum = array[mid]
      if(currentNum === num){
       return mid;
       }else if(currentNum < num){
       left = mid+1
       }
      else{
       right = mid-1
   }
   } 
}
const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(array, 8)); 
