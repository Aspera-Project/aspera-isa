/*
 * NOPInstruction.test.ts
 * Unit tests for the NOPInstruction class
 * Created by Andrew Davis
 * Created on 2/10/2020
 * Licensed under the MIT License 
 */

// import
import { NOPInstruction } from '../../src/index';

// start of unit tests
describe('NOPInstruction', () => {
	// Checks that the NOP opcode has a value of 0
	it('Proper data generation', () => {
		expect(new NOPInstruction().data).toBe(0x00000000);
	});
});

// end of file
