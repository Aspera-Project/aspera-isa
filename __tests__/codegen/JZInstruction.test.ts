/*
 * JZInstruction.test.ts
 * Unit tests for the JZInstruction class
 * Created by Andrew Davis
 * Created on 3/6/2020
 * Licensed under the MIT License 
 */

// imports
import { JZInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('JZInstruction', () =>  { 
	// Checks that the JZ instruction has the proper data value
	it('Proper data generation', () => {
		expect(new JZInstruction(0x0000BEEF).data).toBe(0x1000BEEF);
	});

	// Checks that the JZ instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new JZInstruction(0x0000BEEF).opcode).toBe(Opcode.JZ);
	});
});

// end of file
