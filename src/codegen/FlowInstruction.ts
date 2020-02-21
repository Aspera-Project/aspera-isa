/*
 * FlowInstruction.ts
 * Defines a class that represents a program flow instruction
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// imports
import { FlowOpcode } from '../util/FlowOpcode';
import { Instruction } from './Instruction';
import { ArgSizeError } from '../error/ArgSizeError';

/**
 * An Aspera instruction that alters program flow
 */
export abstract class FlowInstruction extends Instruction {
	// field
	/**
	 * The address to jump to
	 */
	protected _addr: number;

	/**
	 * Constructs a new `FlowInstruction` instance
	 *
	 * @param op The `Opcode` for the concrete instruction
	 * @param addr The address to jump to
	 *
	 * @throws ArgSizeError If `addr` is negative or > 2^24 - 1
	 */
	public constructor(op: FlowOpcode, addr: number) {
		super(op); // call the superclass constructor

		// validate the address
		if (addr < 0x00000000 || addr > 0x00ffffff) {
			throw new ArgSizeError(addr);
		}

		// and init the address field
		this._addr = addr;
	}

	/**
	 * Gets the address to jump to
	 *
	 * @returns The address to jump to
	 */
	public get address(): number {
		return this._addr;
	}

	/**
	 * Gets the numeric instruction data
	 *
	 * @returns The actual machine instruction
	 */
	public get data(): number {
		let ret = super.data; // get the superclass data
		ret |= this._addr; // OR it with the address
		return ret; // and return the data
	}
}

// end of file
