/// <reference path="../../typings/modules/typings-core/index.d.ts" />
import { Emitter } from 'typings-core'
interface Argv {
  help: boolean
  version: boolean
  dev: boolean
  save: boolean
  saveDev: boolean
  savePeer: boolean
  verbose: boolean
  production: boolean
  cwd?: string
  out?: string
  source?: string
  offset?: number
  limit?: number
  sort?: string
}

interface Args extends Argv {
  _: string[]
  emitter: Emitter
}
/*
 * 
 */
let s = 3
console.log("some tool"+s)
