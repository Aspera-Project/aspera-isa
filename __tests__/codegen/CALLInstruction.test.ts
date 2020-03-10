/*
 * CALLInstruction.test.ts
 * Unit tests for the CALLInstruction class
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License 
 */

// imports
import { CALLInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('CALLInstruction', () =>  { 
	// Checks that the CALL instruction has the proper data value
	it('Proper data generation', () => {
		expect(new CALLInstruction(0x0000BEEF).data).toBe(0x1200BEEF);
	});

	// Checks that the CALL instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new CALLInstruction(0x0000BEEF).opcode).toBe(Opcode.CALL);
	});
});

// end of file
