/*
 * POPInstruction.test.ts
 * Unit tests for the POPInstruction class
 * Created by Andrew Davis
 * Created on 2/20/2020
 * Licensed under the MIT License 
 */

// imports
import { POPInstruction } from '../../src/index';
import { Opcode } from '../../src/index';

// start of unit tests
describe('POPInstruction', () => {
	// Checks that the POP instruction has a data value of 0x02000000 
	it('Proper data generation', () => {
		expect(new POPInstruction().data).toBe(0x02000000);
	});

	// Checks that the POP instruction has the correct opcode
	it('Has correct opcode', () => {
		expect(new POPInstruction().opcode).toBe(Opcode.POP);
	});
});

// end of file
