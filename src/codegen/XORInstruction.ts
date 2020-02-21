/*
 * XORInstruction.ts
 * Defines a class that represents an XOR instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * An `XOR` Aspera instruction
 */
export class XORInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `NOTInstruction` instance
	 */
	public constructor() {
		super(Opcode.XOR); // call the superclass constructor
	}
}

// end of file
