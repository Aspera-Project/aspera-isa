/*
 * RANDInstruction.ts
 * Defines a class that represents a RAND instruction
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `RAND` instruction
 */
export class RANDInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `RANDInstruction` instance
	 */
	public constructor() {
		super(Opcode.RAND); // call the superclass constructor
	}
}

// end of file
