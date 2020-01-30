// 선택정렬
let temp,index,i,j,min;
const array = [10,9,7,2,1,3,6,5,4];

for(i = 0; i < array.length; i ++){
  min=9999;
  for(j = i; j < array.length; j++){
    if(min > array[j]){
      min = array[j];
      index = j;
    }
  }
  temp = array[i];
  array[i] = array[index];
  array[index] = temp;
}

console.log(array);
