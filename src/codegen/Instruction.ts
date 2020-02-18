/*
 * Instruction.ts
 * Defines a class that represents an Aspera instruction
 * Created by Andrew Davis
 * Created on 2/10/2020
 * Licensed under the MIT License
 */

// import
import { Opcode } from './Opcode';

/**
 * An Aspera machine instruction
 */
export abstract class Instruction {
	// field
	/**
	 * The [[Opcode]] for the `Instruction`
	 */
	protected _opcode: Opcode;

	// methods

	/**
	 * Constructs a new `Instruction` instance
	 *
	 * @param opcode The opcode for the `Instruction`
	 */
	public constructor(opcode: Opcode) {
		this._opcode = opcode; // init the opcode field
	}

	/**
	 * Gets the opcode for the `Instruction`
	 *
	 * @returns The opcode for the `Instruction`
	 */
	public get opcode(): Opcode {
		return this._opcode;
	}

	/**
	 * Gets the numeric instruction data
	 *
	 * @returns The actual machine instruction
	 */
	public get data(): number {
		return (this._opcode << 24) | 0x00000000;
	}
}

// end of file
