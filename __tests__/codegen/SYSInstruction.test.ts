/*
 * SYSInstruction.test.ts
 * Unit tests for the SYSInstruction class
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License 
 */

// imports
import { SYSInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('SYSInstruction', () =>  { 
	// Checks that the SYS instruction has the proper data value
	it('Proper data generation', () => {
		expect(new SYSInstruction().data).toBe(0x14000000);
	});

	// Checks that the SYS instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new SYSInstruction().opcode).toBe(Opcode.SYS);
	});
});

// end of file
