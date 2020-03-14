/*
 * INCInstruction.test.ts
 * Unit tests for the INCInstruction class
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License 
 */

// imports
import { INCInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('INCInstruction', () =>  { 
	// Checks that the INC instruction has the proper data value
	it('Proper data generation', () => {
		expect(new INCInstruction().data).toBe(0x18000000);
	});

	// Checks that the INC instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new INCInstruction().opcode).toBe(Opcode.INC);
	});
});

// end of file
