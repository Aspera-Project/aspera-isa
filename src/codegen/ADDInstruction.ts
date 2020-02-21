/*
 * ADDInstruction.ts
 * Defines a class that represents an ADD instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * An `ADD` Aspera instruction
 */
export class ADDInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `ADDInstruction` instance
	 */
	public constructor() {
		super(Opcode.ADD); // call the superclass constructor
	}
}

// end of file
