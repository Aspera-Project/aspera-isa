/*
 * ORInstruction.test.ts
 * Unit tests for the ORInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// imports
import { ORInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('ORInstruction', () =>  { 
	// Checks that the OR instruction has a data value of 0x09000000 
	it('Proper data generation', () => {
		expect(new ORInstruction().data).toBe(0x09000000);
	});

	// Checks that the OR instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new ORInstruction().opcode).toBe(Opcode.OR);
	});
});

// end of file
