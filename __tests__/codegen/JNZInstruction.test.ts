/*
 * JNZInstruction.test.ts
 * Unit tests for the JNZInstruction class
 * Created by Andrew Davis
 * Created on 3/9/2020
 * Licensed under the MIT License 
 */

// imports
import { JNZInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('JNZInstruction', () =>  { 
	// Checks that the JNZ instruction has the proper data value
	it('Proper data generation', () => {
		expect(new JNZInstruction(0x0000BEEF).data).toBe(0x1100BEEF);
	});

	// Checks that the JNZ instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new JNZInstruction(0x0000BEEF).opcode).toBe(Opcode.JNZ);
	});
});

// end of file
