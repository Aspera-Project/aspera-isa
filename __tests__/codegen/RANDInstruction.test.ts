/*
 * RANDInstruction.test.ts
 * Unit tests for the RANDInstruction class
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License 
 */

// imports
import { RANDInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('RANDInstruction', () =>  { 
	// Checks that the RAND instruction has the proper data value
	it('Proper data generation', () => {
		expect(new RANDInstruction().data).toBe(0x17000000);
	});

	// Checks that the RAND instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new RANDInstruction().opcode).toBe(Opcode.RAND);
	});
});

// end of file
