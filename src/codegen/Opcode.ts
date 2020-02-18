/*
 * Opcode.ts
 * Enumerates Aspera opcodes
 * Created by Andrew Davis
 * Created on 2/9/2020
 * Licensed under the MIT License
 */

// no imports

/**
 * The opcode segment of an Aspera instruction
 */
export enum Opcode {
	/**
	 * No-op
	 */
	NOP = 0x00,

	/**
	 * Pushes a numeric value onto the stack
	 */
	PUSH,

	/**
	 * Pops a numeric value off of the stack
	 */
	POP,

	/**
	 * Pops the top two values off of the stack,
	 * adds them, and pushes the result onto the stack
	 */
	ADD,

	/**
	 * Pops the top two values off of the stack,
	 * subtracts the second from the first, and pushes
	 * the result onto the stack
	 */
	SUB,

	/**
	 * Pops the top two values off of the stack,
	 * multiplies them together, and pushes the result
	 * onto the stack
	 */
	MUL,

	/**
	 * Pops the top two values off of the stack,
	 * divides the first by the second, and pushes
	 * the result onto the stack
	 */
	DIV,

	/**
	 * Pops the top two values off of the stack
	 * and pushes the first modulus the second
	 * onto the stack
	 */
	MOD,

	/**
	 * Pops the top two values off of the stack,
	 * bitwise ANDs them together, and pushes
	 * the result onto the stack
	 */
	AND,

	/**
	 * Pops the top two values off of the stack,
	 * bitwise ORs them together, and pushes the
	 * result onto the stack
	 */
	OR,

	/**
	 * Pops the top value off of the stack,
	 * bitwise negates it, and pushes the result
	 * onto the stack
	 */
	NOT,

	/**
	 * Pops the top two values off of the stack,
	 * bitwise XORs them together, and pushes the
	 * result onto the stack
	 */
	XOR,

	/**
	 * Sets the program counter to the
	 * argument of the instruction
	 */
	JMP,

	/**
	 * Pops the top value off the stack
	 * and sets the program counter to the argument
	 * if the popped value is negative
	 */
	JN,

	/**
	 * Pops the top value off the stack and
	 * sets the program counter to the argument
	 * if the popped value is positive
	 */
	JP,

	/**
	 * Pops the top value off the stack
	 * and sets the program counter to the argument
	 * if the popped value is zero
	 */
	JZ,

	/**
	 * Pops the top value off the stack
	 * and sets the program counter to the argument
	 * if the popped value is nonzero
	 */
	JNZ,

	/**
	 * Executes a subroutine located at the
	 * argument of the instruction
	 */
	CALL,

	/**
	 * Returns from a subroutine
	 */
	RET,

	/**
	 * Executes a system call. The ID of the syscall
	 * must be on top of the stack, and any arguments
	 * must follow it on the stack. The ID and all
	 * arguments will be popped after the syscall
	 * executes.
	 */
	SYS,

	/**
	 * Pops the top two values off of the stack and
	 * writes the top *n* stack values to memory
	 * starting at address *m*, where *m* and *n*
	 * are the first and second values popped,
	 * respectively.
	 */
	STO,

	/**
	 * Pops the top two values off of the stack
	 * and pushes the the first *n* bytes of memory
	 * starting at location *m* onto the stack, where
	 * *m* and *n* are the first and second values
	 * popped, respectively.
	 */
	LD,
}

// end of file
