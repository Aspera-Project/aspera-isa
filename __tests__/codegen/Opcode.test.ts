/*
 * Opcode.test.ts
 * Unit tests for the Opcode enum
 * Created by Andrew Davis
 * Created on 2/9/2020
 * Licensed under the MIT License 
 */

// import
import { Opcode } from '../../src/index';

// start of unit tests
describe('Opcode', () => {
	// Checks that the NOP opcode has a value of 0
	it('NOP is 0x00', () => {
		expect(Opcode.NOP).toBe(0x00);
	});
});

// end of file
