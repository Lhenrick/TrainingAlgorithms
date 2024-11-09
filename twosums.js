function twoSum(nums, target) {
            
    let array = [];
        

    for(let i = 0; i < nums.length; i++){


        console.log(`I = ${i}`)
        for(let j = i + 1; j < nums.length; j++){
            
            if(nums[i] + nums[j] == target){

               array.push(i);
               array.push(j); 

            }
            console.log(`J = ${j}`)
            
            
        }   
    }
    return array
}
const nums = [3,4,5,6];
const target = 7;
console.log(twoSum(nums, target));