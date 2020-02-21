/*
 * ANDInstruction.test.ts
 * Unit tests for the ANDInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { ANDInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('ANDInstruction', () =>  { 
	// Checks that the AND instruction has a data value of 0x08000000 
	it('Proper data generation', () => {
		expect(new ANDInstruction().data).toBe(0x08000000);
	});

	// Checks that the AND instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new ANDInstruction().opcode).toBe(Opcode.AND);
	});
});

// end of file
