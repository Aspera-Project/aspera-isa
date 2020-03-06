/*
 * JZInstruction.ts
 * Defines a class that represents a JZ instruction
 * Created by Andrew Davis
 * Created on 3/6/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { FlowInstruction } from './FlowInstruction';

/**
 * A `JZ` Aspera instruction
 */
export class JZInstruction extends FlowInstruction {
	// no fields

	// methods

	/**
	 * Constructs a new `JZInstruction` instance
	 *
	 * @param addr The address to jump to
	 *
	 * @throws ArgSizeError If `addr` is negative or > 2^24 - 1
	 */
	public constructor(addr: number) {
		super(Opcode.JZ, addr); // call the superclass constructor
	}
}

// end of file
