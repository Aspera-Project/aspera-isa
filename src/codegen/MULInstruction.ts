/*
 * MULInstruction.ts
 * Defines a class that represents a MUL instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `MUL` Aspera instruction
 */
export class MULInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `MULInstruction` instance
	 */
	public constructor() {
		super(Opcode.MUL); // call the superclass constructor
	}
}

// end of file
