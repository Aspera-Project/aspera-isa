/*
 * DECInstruction.ts
 * Defines a class that represents a DEC instruction
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `DEC` instruction
 */
export class DECInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `DECInstruction` instance
	 */
	public constructor() {
		super(Opcode.DEC); // call the superclass constructor
	}
}

// end of file
