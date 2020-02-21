/*
 * DIVInstruction.ts
 * Defines a class that represents a DIV instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `DIV` Aspera instruction
 */
export class DIVInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `DIVInstruction` instance
	 */
	public constructor() {
		super(Opcode.DIV); // call the superclass constructor
	}
}

// end of file
