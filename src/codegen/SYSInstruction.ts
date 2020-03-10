/*
 * SYSInstruction.ts
 * Defines a class that represents a SYS instruction
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `SYS` instruction
 */
export class SYSInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `SYSInstruction` instance
	 */
	public constructor() {
		super(Opcode.SYS); // call the superclass constructor
	}
}

// end of file
