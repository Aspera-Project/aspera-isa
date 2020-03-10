/*
 * STOInstruction.ts
 * Defines a class that represents a STO instruction
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `STO` instruction
 */
export class STOInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `STOInstruction` instance
	 */
	public constructor() {
		super(Opcode.STO); // call the superclass constructor 
	}
}

// end of file
