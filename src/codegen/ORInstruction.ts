/*
 * ORInstruction.ts
 * Defines a class that represents an OR instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * An `OR` Aspera instruction
 */
export class ORInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `ORInstruction` instance
	 */
	public constructor() {
		super(Opcode.OR); // call the superclass constructor
	}
}

// end of file
