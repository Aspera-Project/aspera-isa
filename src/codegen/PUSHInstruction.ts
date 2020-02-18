/*
 * PUSHInstruction.ts
 * Defines a class that represents a PUSH instruction
 * Created by Andrew Davis
 * Created on 2/18/2020
 * Licensed under the MIT License
 */

// imports
import { Instruction } from './Instruction';
import { Opcode } from './Opcode';
import { ArgSizeError } from '../error/ArgSizeError';

/**
 * A `PUSH` instruction
 */
export class PUSHInstruction extends Instruction {
	// field
	/**
	 * The value being pushed
	 */
	private _value: number;

	// methods

	/**
	 * Constructs a new `PUSHInstruction` instance
	 *
	 * @param value The value to be pushed
	 *
	 * @throws ArgSizeError If the value is < 0 or > 2^24 - 1
	 */
	public constructor(value: number) {
		super(Opcode.PUSH); // call the superclass constructor

		// validate the value
		if (value < 0x00000000 || value > 0x00ffffff) {
			throw new ArgSizeError(value);
		}

		this._value = value; // and init the value field
	}

	/**
	 * Gets the value being pushed
	 *
	 * @returns The value being pushed
	 */
	public get value(): number {
		return this._value;
	}

	/**
	 * Gets the numeric instruction data
	 *
	 * @returns The actual machine instruction
	 */
	public get data(): number {
		let ret = super.data; // get the superclass instruction
		ret |= this._value; // OR it with the value
		return ret; // and return the result
	}
}

// end of file
