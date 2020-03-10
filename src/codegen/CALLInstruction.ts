/*
 * CALLInstruction.ts
 * Defines a class that represents a CALL instruction
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { FlowInstruction } from './FlowInstruction';

/**
 * A `CALL` Aspera instruction
 */
export class CALLInstruction extends FlowInstruction {
	// no fields

	// methods

	/**
	 * Constructs a new `CALLInstruction` instance
	 *
	 * @param addr The address of the subroutine
	 *
	 * @throws ArgSizeError If `addr` is negative or > 2^24 - 1
	 */
	public constructor(addr: number) {
		super(Opcode.CALL, addr); // call the superclass constructor
	}
}

// end of file
