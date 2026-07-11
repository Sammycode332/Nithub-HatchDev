function makePrefixSum(nums: number[]):number[]{
    let prefix : number[] = new Array(nums.length)

    prefix[0] = nums[0]

    for(let i=0;i<=nums.length;i++){
        prefix[i] = prefix[i-1] + nums[i]
    }
    return prefix
}