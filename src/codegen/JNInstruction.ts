/*
 * JNInstruction.ts
 * Defines a class that represents a JN instruction
 * Created by Andrew Davis
 * Created on 2/23/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { FlowInstruction } from './FlowInstruction';

/**
 * A `JN` Aspera instruction
 */
export class JNInstruction extends FlowInstruction {
	// no fields

	// methods

	/**
	 * Constructs a new `JNInstruction` instance
	 *
	 * @param addr The address to jump to
	 *
	 * @throws ArgSizeError If `addr` is negative or > 2^24 - 1
	 */
	public constructor(addr: number) {
		super(Opcode.JN, addr); // call the superclass constructor
	}
}

// end of file
