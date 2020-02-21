/*
 * MODInstruction.test.ts
 * Unit tests for the MODInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { MODInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('MODInstruction', () =>  { 
	// Checks that the MOD instruction has a data value of 0x07000000 
	it('Proper data generation', () => {
		expect(new MODInstruction().data).toBe(0x07000000);
	});

	// Checks that the MOD instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new MODInstruction().opcode).toBe(Opcode.MOD);
	});
});

// end of file
