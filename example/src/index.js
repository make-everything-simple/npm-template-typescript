import 'dotenv/config';
import { add } from '@askbills/npm-template-typescript';

function showResultSumOf(a, b) {
    return `@askbills/npm-template-typescript: Sum of ${a} + ${b} = ${add(a, b)} `;
}

console.log(showResultSumOf(7, 3));
if (process.env.CUSTOM_NAME) {
    console.log(`[Dotenv] CUSTOM_NAME = ${process.env.CUSTOM_NAME}`);
} else {
    console.log(
        "[Dotenv] Clone '.env.environment' to '.env' and replace the variables values accordingly to configure your variables",
    );
}
