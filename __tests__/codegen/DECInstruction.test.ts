/*
 * DECInstruction.test.ts
 * Unit tests for the DECInstruction class
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License 
 */

// imports
import { DECInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('DECInstruction', () =>  { 
	// Checks that the DEC instruction has the proper data value
	it('Proper data generation', () => {
		expect(new DECInstruction().data).toBe(0x19000000);
	});

	// Checks that the DEC instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new DECInstruction().opcode).toBe(Opcode.DEC);
	});
});

// end of file
