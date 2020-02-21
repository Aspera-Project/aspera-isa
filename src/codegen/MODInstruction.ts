/*
 * MODInstruction.ts
 * Defines a class that represents a MOD instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { Instruction } from './Instruction';

/**
 * A `MOD` Aspera instruction
 */
export class MODInstruction extends Instruction {
	// no fields

	/**
	 * Constructs a new `DIVInstruction` instance
	 */
	public constructor() {
		super(Opcode.MOD); // call the superclass constructor
	}
}

// end of file
