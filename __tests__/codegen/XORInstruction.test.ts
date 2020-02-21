/*
 * XORInstruction.test.ts
 * Unit tests for the XORInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { XORInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('XORInstruction', () =>  { 
	// Checks that the XOR instruction has a data value of 0x0B000000 
	it('Proper data generation', () => {
		expect(new XORInstruction().data).toBe(0x0B000000);
	});

	// Checks that the XOR instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new XORInstruction().opcode).toBe(Opcode.XOR);
	});
});

// end of file
