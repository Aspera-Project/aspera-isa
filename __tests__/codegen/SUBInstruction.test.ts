/*
 * SUBInstruction.test.ts
 * Unit tests for the SUBInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// import
import { SUBInstruction } from '../../src/index';

// start of unit tests
describe('SUBInstruction', () => {
	// Checks that the SUB opcode has a value of 4
	it('Proper data generation', () => {
		expect(new SUBInstruction().data).toBe(0x04000000);
	});
});

// end of file
