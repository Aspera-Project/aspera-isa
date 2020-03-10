/*
 * STOInstruction.test.ts
 * Unit tests for the STOInstruction class
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License 
 */

// imports
import { STOInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('STOInstruction', () =>  { 
	// Checks that the STO instruction has the proper data value
	it('Proper data generation', () => {
		expect(new STOInstruction().data).toBe(0x15000000);
	});

	// Checks that the STO instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new STOInstruction().opcode).toBe(Opcode.STO);
	});
});

// end of file
