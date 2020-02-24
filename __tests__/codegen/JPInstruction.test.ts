/*
 * JPInstruction.test.ts
 * Unit tests for the JPInstruction class
 * Created by Andrew Davis
 * Created on 2/24/2020
 * Licensed under the MIT License 
 */

// imports
import { JPInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('JPInstruction', () =>  { 
	// Checks that the JP instruction has the proper data value
	it('Proper data generation', () => {
		expect(new JPInstruction(0x0000BEEF).data).toBe(0x0F00BEEF);
	});

	// Checks that the JP instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new JPInstruction(0x0000BEEF).opcode).toBe(Opcode.JP);
	});
});

// end of file
