/*
 * JCInstruction.test.ts
 * Unit tests for the JCInstruction class
 * Created by Andrew Davis
 * Created on 2/23/2020
 * Licensed under the MIT License 
 */

// imports
import { JCInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('JCInstruction', () =>  { 
	// Checks that the JC instruction has the proper data value
	it('Proper data generation', () => {
		expect(new JCInstruction().data).toBe(0x0D000000);
	});

	// Checks that the JC instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new JCInstruction().opcode).toBe(Opcode.JC);
	});
});

// end of file
