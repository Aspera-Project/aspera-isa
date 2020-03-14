/*
 * NEGInstruction.ts
 * Defines a class that represents a NEG instruction
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `NEG` instruction
 */
export class NEGInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `NEGInstruction` instance
	 */
	public constructor() {
		super(Opcode.NEG); // call the superclass constructor
	}
}

// end of file
