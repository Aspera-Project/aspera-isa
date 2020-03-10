/*
 * FlowOpcode.ts
 * Defines a type that represents a program flow opcode
 * Created by Andrew Davis
 * Created on 2/21/2020
 * Licensed under the MIT License
 */

// import
import { Opcode } from '../codegen/Opcode';

/**
 * An [[Opcode]] that modifies program flow
 */
export type FlowOpcode = Opcode.JMP | Opcode.JC | Opcode.JN | Opcode.JNZ | Opcode.JP | Opcode.JZ | Opcode.CALL | Opcode.RET;

// end of file
