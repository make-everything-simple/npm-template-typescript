const { add } = require('@askbills/npm-template-typescript');

function showResultSumOf(a, b) {
	return `@askbills/npm-template-typescript: Sum of ${a} + ${b} = ${add(a, b)} `;
}

console.log(showResultSumOf(7, 3));
