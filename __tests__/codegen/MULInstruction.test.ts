/*
 * MULInstruction.test.ts
 * Unit tests for the MULInstruction class
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License 
 */

// import
import { MULInstruction } from '../../src/index';

// start of unit tests
describe('MULInstruction', () => {
	// Checks that the MUL opcode has a value of 5
	it('Proper data generation', () => {
		expect(new MULInstruction().data).toBe(0x05000000);
	});
});

// end of file
