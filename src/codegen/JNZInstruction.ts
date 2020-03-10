/*
 * JNZInstruction.ts
 * Defines a class that represents a JNZ instruction
 * Created by Andrew Davis
 * Created on 3/9/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { FlowInstruction } from './FlowInstruction';

/**
 * A `JNZ` Aspera instruction
 */
export class JNZInstruction extends FlowInstruction {
	// no fields

	// methods

	/**
	 * Constructs a new `JNZInstruction` instance
	 *
	 * @param addr The address to jump to
	 *
	 * @throws ArgSizeError If `addr` is negative or > 2^24 - 1
	 */
	public constructor(addr: number) {
		super(Opcode.JNZ, addr); // call the superclass constructor
	}
}

// end of file
