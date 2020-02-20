/*
 * POPInstruction.ts
 * Defines a class that represents a POP instruction
 * Created by Andrew Davis
 * Created on 2/20/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `POP` Aspera instruction
 */
export class POPInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `POPInstruction` instance
	 */
	public constructor() {
		super(Opcode.POP); // call the superclass constructor
	}
}

// end of file
