/*
 * MULInstruction.test.ts
 * Unit tests for the MULInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { MULInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('MULInstruction', () => {
	// Checks that the MUL instruction has a data value of 0x05000000 
	it('Proper data generation', () => {
		expect(new MULInstruction().data).toBe(0x05000000);
	});

	// Checks that the MUL instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new MULInstruction().opcode).toBe(Opcode.MUL);
	});
});

// end of file
