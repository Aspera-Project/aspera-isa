/*
 * JMPInstruction.ts
 * Defines a class that represents a JMP instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { FlowInstruction } from './FlowInstruction';

/**
 * A `JMP` Aspera instruction
 */
export class JMPInstruction extends FlowInstruction {
	// no fields

	// methods

	/**
	 * Constructs a new `JMPInstruction` instance
	 *
	 * @param addr The address to jump to
	 *
	 * @throws ArgSizeError If `addr` is negative or > 2^24 - 1
	 */
	public constructor(addr: number) {
		super(Opcode.JMP, addr); // call the superclass constructor
	}
}

// end of file
