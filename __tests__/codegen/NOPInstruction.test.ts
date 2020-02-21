/*
 * NOPInstruction.test.ts
 * Unit tests for the NOPInstruction class
 * Created by Andrew Davis
 * Created on 2/10/2020
 * Licensed under the MIT License 
 */

// imports
import { NOPInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('NOPInstruction', () => {
	// Checks that the NOP instruction has a data value of 0x00000000 
	it('Proper data generation', () => {
		expect(new NOPInstruction().data).toBe(0x00000000);
	});

	// Checks that the NOP instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new NOPInstruction().opcode).toBe(Opcode.NOP);
	});
});

// end of file
