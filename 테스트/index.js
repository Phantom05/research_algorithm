



function splitIntoTwo(arr){
  let index = 0;
  let leftSum = 0;
  let len = arr.length;
  console.log(arr);
  
  for(let i = 0 ; i < len ; i++){
    if(len - i === 1) return index;

    leftSum += arr[i];
    let rightSum =0;
    for(let j = i+1; j < len; j++){
      console.log(i,len);
      console.log(arr[j],'arr[j]');
      if(arr[j]) rightSum += arr[j];
    }
    
    if(leftSum > rightSum){
      console.log(`>> left : ${leftSum}, right : ${rightSum}`);
      index++;
    }else{
      console.log(`left : ${leftSum}, right : ${rightSum}`);
    }

  }
  return index;
}
const arr = Array.from({length: 2000}, (_, i) => 10000 - i);
console.log(
  // splitIntoTwo(arr)
);

// Math.floor(len / 2)

// function splitIntoTwo(arr){
//   let index = 0;
//   let leftSum = 0;
  
//   for(let i = 0 ; i < arr.length-1 ; i++){
//     leftSum += arr[i];

//     let rightSum =0;
//     console.log(arr.length ,'arr.length ');
//     for(let j = arr.length -1 ; j >= 0 ; j--){
//       rightSum += arr[j];
//       leftSum -= arr[j];
//     }
//     console.log(`left : ${leftSum}, right : ${rightSum}`);
//     if(leftSum > rightSum){
//       index++;
//     }

//   }
//   return index;
// }





// function splitIntoTwo(arr) {
//   // Write your code here
//   let index = 0;
//   let leftSum = 0;

//   for(let i =0; i< arr.length; i++){
//       leftSum += arr[i];
//       let rightSum =0;
//       for(let j = i+1; j < arr.length; j++){
//           rightSum += arr[j];
//       }
//       if(leftSum > rightSum){
//           index++;
//       }
//   }
//   return index;

// }




let arr1 = [1,1,1];
let x = 2;

function findSubrray(x,arr){
  if(x > arr.length || x === 0 || x < 0) return 0;
  
  let new_arr= [];
  for(let i = 0 ; i < arr.length; i++){
    
    let sliceArr = arr.slice(i,i+x);
    if(sliceArr.length == x){
      new_arr.push(Math.min(...sliceArr));
    }
  }
  return Math.max(...new_arr);
}

// console.clear();
console.log(
  findSubrray(x,arr1)
);