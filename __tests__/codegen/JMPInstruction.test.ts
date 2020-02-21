/*
 * JMPInstruction.test.ts
 * Unit tests for the JMPInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { JMPInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('JMPInstruction', () =>  { 
	// Checks that the JMP instruction has the proper data value
	it('Proper data generation', () => {
		expect(new JMPInstruction(0x0000BEEF).data).toBe(0x0C00BEEF);
	});

	// Checks that the NOT instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new JMPInstruction(0x0000BEEF).opcode).toBe(Opcode.JMP);
	});
});

// end of file
