import type { Config } from 'jest';

const config: Config = {
	rootDir: '../',
	moduleFileExtensions: ['ts', 'json', 'js'],
	setupFiles: ['./tests/setup/setup-jest-mock-3rds.ts'],
	testTimeout: 3000,
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'node',
	bail: 1,
	testRegex: '.*\\.test\\.ts$',
	notify: true,
	collectCoverage: true,
	coverageDirectory: './coverage',
	collectCoverageFrom: ['./src/*.{ts,js,jsx}'],
};

export default config;
