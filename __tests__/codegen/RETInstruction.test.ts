/*
 * RETInstruction.test.ts
 * Unit tests for the RETInstruction class
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License 
 */

// imports
import { RETInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('RETInstruction', () =>  { 
	// Checks that the RET instruction has the proper data value
	it('Proper data generation', () => {
		expect(new RETInstruction().data).toBe(0x13000000);
	});

	// Checks that the RET instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new RETInstruction().opcode).toBe(Opcode.RET);
	});

	// Checks that the RET instruction has an address field of 0x000000
	it('Has nullptr address', () => {
		expect(new RETInstruction().address).toBe(0x000000);
	});
});

// end of file
