/*
 * SUBInstruction.test.ts
 * Unit tests for the SUBInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { SUBInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('SUBInstruction', () => {
	// Checks that the SUB instruction has a data value of 0x04000000 
	it('Proper data generation', () => {
		expect(new SUBInstruction().data).toBe(0x04000000);
	});

	// Checks that the SUB instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new SUBInstruction().opcode).toBe(Opcode.SUB);
	});
});

// end of file
