/*
 * ADDInstruction.test.ts
 * Unit tests for the ADDInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// import
import { ADDInstruction } from '../../src/index';

// start of unit tests
describe('ADDInstruction', () => {
	// Checks that the ADD opcode has a value of 3
	it('Proper data generation', () => {
		expect(new ADDInstruction().data).toBe(0x03000000);
	});
});

// end of file
