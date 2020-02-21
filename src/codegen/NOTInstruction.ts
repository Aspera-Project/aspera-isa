/*
 * NOTInstruction.ts
 * Defines a class that represents a NOT instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `NOT` Aspera instruction
 */
export class NOTInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `NOTInstruction` instance
	 */
	public constructor() {
		super(Opcode.NOT); // call the superclass constructor
	}
}

// end of file
