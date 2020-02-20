/*
 * POPInstruction.test.ts
 * Unit tests for the POPInstruction class
 * Created by Andrew Davis
 * Created on 2/20/2020
 * Licensed under the MIT License 
 */

// import
import { POPInstruction } from '../../src/index';

// start of unit tests
describe('POPInstruction', () => {
	// Checks that the POP opcode has a value of 2
	it('Proper data generation', () => {
		expect(new POPInstruction().data).toBe(0x02000000);
	});
});

// end of file
