/*
 * LDInstruction.test.ts
 * Unit tests for the LDInstruction class
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License 
 */

// imports
import { LDInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('LDInstruction', () =>  { 
	// Checks that the LD instruction has the proper data value
	it('Proper data generation', () => {
		expect(new LDInstruction().data).toBe(0x16000000);
	});

	// Checks that the LD instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new LDInstruction().opcode).toBe(Opcode.LD);
	});
});

// end of file
