/**
 *  _____                                        _
 * |  __ \                                      | |
 * | |  | | ___   ___ _   _ _ __ ___   ___ _ __ | |_
 * | |  | |/ _ \ / __| | | | '_ ` _ \ / _ \ '_ \| __|
 * | |__| | (_) | (__| |_| | | | | | |  __/ | | | |_
 * |_____/ \___/ \___|\__,_|_| |_| |_|\___|_| |_|\__|
 *
 * A document is a representation of a file. We are parsing documents for
 * classes, functions, variables and header text(such as this).
 *
 * @setup
 *   tester.document = null
 *   tester.fs = require("fs")
 * @clean
 *   tester.document = null
 */

import { readFile } from "fs-promise"
import { Parser } from "./parser"


export class DocumentParser extends Parser {

  // ================
  // Document(string)
  // Create an instance of a document
  //
  // @run
  //   tester.document = new Document(`${__dirname}/test-document.js`)
  //   assert(tester.document.path === `${__dirname}/test-document.js`)
  constructor(path) {
    this.path = path
  }


  // ============================
  // async readFile() => Document
  // Read data from document given in constructor
  async readFile() {
    const data = await readFile(this.path, "utf8")
    return (this.data = data, this)
  }


  // ==============================
  // async getVariabes() => Array<Variable>
  // Parse variables in node document
  //
  // @run*
  //   const vars = yield tester.document.getVariables()
  //   assert(vars.length === 1)
  async getVariables() {
    if (!this.data) {
      this.data = await this.readFile()
    }

    if (this.variables) {
      return this.variables
    }

    return this.variables = []
  }


  // =======================================
  // async getFunctions() => Array<Function>
  // Parse functions in node document
  //
  // @run*
  //   const functions = yield tester.document.getFunctions()
  //   assert(functions.length === 1)
  async getFunctions() {
    if (!this.data) {
      this.data = await this.readFile()
    }

    if (this.functions) {
      return this.functions
    }

    return this.functions = []
  }


  // ==================================
  // async getClasses() => Array<Class>
  // Parse classes in node document
  //
  // @run
  //   tester.document.getClasses()
  //   assert(functions.length === 1)
  async getClasses() {
    if (!this.data) {
      this.data = await this.readFile()
    }

    if (this.classes) {
      return this.classes
    }

    return this.classes = []
  }


  // ==========================
  // async toString() => string
  // Render document to string
  //
  // @run*
  //   const out = yield tester.document.toString()
  //   const expected = tester.fs.readFileSync("expectedDoc.txt", "utf8")
  //   assert(out === expected)
  async toString() {
    let out = this.getHeaderString()

    for (let v of await this.getVariables()) {
      out += v.toString()
    }

    for (let c of await this.getClasses()) {
      out += c.toString()
    }

    for (let f of await this.getFunctions()) {
      out += f.toString()
    }

    return out
  }
}
