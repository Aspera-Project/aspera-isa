/*
 * DIVInstruction.test.ts
 * Unit tests for the DIVInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { DIVInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('DIVInstruction', () =>  {
	// Checks that the DIV instruction has a data value of 0x06000000 
	it('Proper data generation', () => {
		expect(new DIVInstruction().data).toBe(0x06000000);
	});

	// Checks that the DIV instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new DIVInstruction().opcode).toBe(Opcode.DIV);
	});
});

// end of file
