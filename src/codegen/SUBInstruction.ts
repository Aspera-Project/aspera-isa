/*
 * SUBInstruction.ts
 * Defines a class that represents a SUB instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `SUB` Aspera instruction
 */
export class SUBInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `SUBInstruction` instance
	 */
	public constructor() {
		super(Opcode.SUB); // call the superclass constructor
	}
}

// end of file
