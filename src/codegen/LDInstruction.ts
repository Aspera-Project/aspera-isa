/*
 * LDInstruction.ts
 * Defines a class that represents an LD instruction
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * An `LD` instruction
 */
export class LDInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `LDInstruction` instance
	 */
	public constructor() {
		super(Opcode.LD); // call the superclass constructor
	}
}

// end of file
