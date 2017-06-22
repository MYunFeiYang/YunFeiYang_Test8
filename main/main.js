
module.exports = function main(input) {	
	let numbers = [
'._. ' '...'  '._. ' '._.'  '...'  '._.'  '._.'  '._.'  '._.'  '._.'
 |.| ,  ..|  , ._|  , ._|  , |_|  , |_. ,  |_. ,  ..| ,  |_| ,  |_|
 |_|    ..|    |_.    ._|    ..|    ._|    |_|    ..|    |_|    ..|];
	
		numberArr = [],
		k=0;
	for(let i=0;i<numbers.length;i++){
		let numberStr = numbers[i];
		if(''==numberStr) 
			continue;
		if(10==k)
			k=0; //十组一循环
		if(!(k in numberArr))
			numberArr[k] = []; //二维数组未初始化
		numberArr[k].push(numberStr);
		k++;
	}
	console.log(numberArr);
	
	let output = '';
	for(let i=0;i<3;i++){
		for(let k=0,l=input.length;k<l;k++){
			let number = input[k];
			output += numberArr[number][i];
			if(k!=l-1) output += " ";
		}
		output += "\n";
	}
    console.log(output);
	return output;
};
