/*
 * INCInstruction.ts
 * Defines a class that represents an INC instruction
 * Created by Andrew Davis
 * Created on 3/13/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * An `INC` instruction
 */
export class INCInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `INCInstruction` instance
	 */
	public constructor() {
		super(Opcode.INC); // call the superclass constructor
	}
}

// end of file
