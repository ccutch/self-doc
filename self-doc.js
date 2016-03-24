
// console.log(require("./document"))


export * from "./DocumentParser"

import { DocumentParser } from "./DocumentParser"
import { coroutine } from "bluebird"


coroutine(function* () {
  const doc = new DocumentParser(__dirname + "/document.js")
  //const classes = yield* doc.parseClasses()
  console.log(doc.toString())
})()

