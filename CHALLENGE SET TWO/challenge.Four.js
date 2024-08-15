/*  Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.
  */

function checkNum(Nums){
    for(let i of  Nums){
        for(let j of Nums){
            if(i!==j){
                return j;
            }
        }
    }
}
const Nums =[2,2,1];
 result = checkNum(Nums);
 console.log(result);