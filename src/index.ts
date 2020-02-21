/*
 * index.ts
 * Main export file for aspera-isa
 * Created by Andrew Davis
 * Created on 2/9/2020
 * Licensed under the MIT License
 */

// exports
export { Opcode } from './codegen/Opcode';
export { Instruction } from './codegen/Instruction';
export { NOPInstruction } from './codegen/NOPInstruction';
export { PUSHInstruction } from './codegen/PUSHInstruction';
export { POPInstruction } from './codegen/POPInstruction';
export { ADDInstruction } from './codegen/ADDInstruction';
export { SUBInstruction } from './codegen/SUBInstruction';
export { MULInstruction } from './codegen/MULInstruction';
export { DIVInstruction } from './codegen/DIVInstruction';
export { MODInstruction } from './codegen/MODInstruction';
export { ANDInstruction } from './codegen/ANDInstruction';
export { ORInstruction } from './codegen/ORInstruction';
export { NOTInstruction } from './codegen/NOTInstruction';
export { XORInstruction } from './codegen/XORInstruction';
export { JMPInstruction } from './codegen/JMPInstruction';
export { ArgSizeError } from './error/ArgSizeError';

// end of file
