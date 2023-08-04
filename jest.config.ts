
import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src/'],
  coverageDirectory: "coverage",
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  collectCoverage: true,
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};

export default config;
