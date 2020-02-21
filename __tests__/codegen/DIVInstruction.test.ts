/*
 * DIVInstruction.test.ts
 * Unit tests for the DIVInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// import
import { DIVInstruction } from '../../src/index';

// start of unit tests
describe('DIVInstruction', () =>  {
	// Checks that the DIV opcode has a value of 6
	it('Proper data generation', () => {
		expect(new DIVInstruction().data).toBe(0x06000000);
	});
});

// end of file
