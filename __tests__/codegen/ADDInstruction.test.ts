/*
 * ADDInstruction.test.ts
 * Unit tests for the ADDInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { ADDInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('ADDInstruction', () => {
	// Checks that the ADD instruction has a data value of 0x03000000 
	it('Proper data generation', () => {
		expect(new ADDInstruction().data).toBe(0x03000000);
	});

	// Checks that the ADD instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new ADDInstruction().opcode).toBe(Opcode.ADD);
	});
});

// end of file
