/*
 * ANDInstruction.ts
 * Defines a class that represents an AND instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `AND` Aspera instruction
 */
export class ANDInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `ANDInstruction` instance
	 */
	public constructor() {
		super(Opcode.AND); // call the superclass constructor
	}
}

// end of file
