/*
 * PUSHInstruction.test.ts
 * Unit tests for the PUSHInstruction class
 * Created by Andrew Davis
 * Created on 2/18/2020
 * Licensed under the MIT License 
 */

// imports
import { PUSHInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('PUSHInstruction', () => {
	// Checks that the PUSH instruction has the correct data value
	it('Proper data generation', () => {
		expect(new PUSHInstruction(0x0000BEEF).data).toBe(0x0100BEEF);
	});

	// Checks that the PUSH instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new PUSHInstruction(0x0000BEEF).opcode).toBe(Opcode.PUSH);
	});
});

// end of file
