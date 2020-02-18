/*
 * PUSHInstruction.test.ts
 * Unit tests for the PUSHInstruction class
 * Created by Andrew Davis
 * Created on 2/18/2020
 * Licensed under the MIT License 
 */

// import
import { PUSHInstruction } from '../../src/index';

// start of unit tests
describe('PUSHInstruction', () => {
	// Checks that the PUSH opcode has the correct value
	it('Proper data generation', () => {
		expect(new PUSHInstruction(0x0000BEEF).data).toBe(0x0100BEEF);
	});
});

// end of file
