/*
 * RETInstruction.ts
 * Defines a class that represents a RET instruction
 * Created by Andrew Davis
 * Created on 3/10/2020
 * Licensed under the MIT License
 */

// imports
import { Opcode } from './Opcode';
import { FlowInstruction } from './FlowInstruction';

/**
 * A `RET` Aspera instruction
 */
export class RETInstruction extends FlowInstruction {
	// no fields

	// methods

	/**
	 * Constructs a new `RETInstruction` instance
	 */
	public constructor() {
		super(Opcode.RET, 0x00000000); // call the superclass constructor
	}
}

// end of file
