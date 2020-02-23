/*
 * JCInstruction.ts
 * Defines a class that represents a JC instruction
 * Created by Andrew Davis
 * Created on 2/23/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { FlowInstruction } from './FlowInstruction';

/**
 * A `JC` Aspera instruction
 */
export class JCInstruction extends FlowInstruction {
	// no fields

	// methods

	/**
	 * Constructs a new `JCInstruction` instance
	 */
	public constructor() {
		super(Opcode.JC, 0x00000000); // call the superclass constructor
	}
}

// end of file
