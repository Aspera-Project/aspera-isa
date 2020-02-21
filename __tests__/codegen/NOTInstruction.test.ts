/*
 * NOTInstruction.test.ts
 * Unit tests for the NOTInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { NOTInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('NOTInstruction', () =>  { 
	// Checks that the NOT instruction has a data value of 0x0A000000 
	it('Proper data generation', () => {
		expect(new NOTInstruction().data).toBe(0x0A000000);
	});

	// Checks that the NOT instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new NOTInstruction().opcode).toBe(Opcode.NOT);
	});
});

// end of file
