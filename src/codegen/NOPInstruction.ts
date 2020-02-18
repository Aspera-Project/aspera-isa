/*
 * NOPInstruction.ts
 * Defines a class that represents a NOP instruction
 * Created by Andrew Davis
 * Created on 2/10/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `NOP` Aspera instruction
 */
export class NOPInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `NOPInstruction` instance
	 */
	public constructor() {
		super(Opcode.NOP); // call the superclass constructor
	}
}

// end of file
