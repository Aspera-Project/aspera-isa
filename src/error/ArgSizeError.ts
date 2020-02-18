/*
 * ArgSizeError.ts
 * Defines an error thrown when the argument
 * of an instruction is too large or too small
 * Created by Andrew Davis
 * Created on 2/18/2020
 * Licensed under the MIT License
 */

// no imports

/**
 * Thrown when the argument of an [[Instruction]] is too large or small
 */
export class ArgSizeError extends Error {
	// no fields

	/**
	 * Constructs a new `ArgSizeError` instance
	 *
	 * @param badArg The argument that triggered the error
	 */
	public constructor(badArg: number) {
		super(`Instruction argument ${badArg} is invalid (wrong size)`);
	}
}

// end of file
