const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[];
	let subarray=[];
	let pre=0;
	for(let i=0;i<arr.length;i++){
		if(pre+arr[i]>n){
			result.push(subarray);
			subarray=[];
			pre=0;
		}
		subarray.push(arr[i]);
		pre+=arr[i];
		
	}
	if(subarray.length>0){
		result.push(subarray);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
