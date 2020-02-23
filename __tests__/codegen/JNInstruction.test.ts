/*
 * JNInstruction.test.ts
 * Unit tests for the JNInstruction class
 * Created by Andrew Davis
 * Created on 2/23/2020
 * Licensed under the MIT License 
 */

// imports
import { JNInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('JNInstruction', () =>  { 
	// Checks that the JN instruction has the proper data value
	it('Proper data generation', () => {
		expect(new JNInstruction(0x0000BEEF).data).toBe(0x0E00BEEF);
	});

	// Checks that the JN instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new JNInstruction(0x0000BEEF).opcode).toBe(Opcode.JN);
	});
});

// end of file
