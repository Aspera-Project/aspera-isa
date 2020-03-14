/*
 * NEGInstruction.test.ts
 * Unit tests for the NEGInstruction class
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License 
 */

// imports
import { NEGInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('NEGInstruction', () =>  { 
	// Checks that the NEG instruction has the proper data value
	it('Proper data generation', () => {
		expect(new NEGInstruction().data).toBe(0x1A000000);
	});

	// Checks that the NEG instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new NEGInstruction().opcode).toBe(Opcode.NEG);
	});
});

// end of file
