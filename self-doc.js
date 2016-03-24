
// console.log(require("./document"))


export * from "./document"

import { Document } from "./document"
import { coroutine } from "bluebird"


coroutine(function* () {
  const doc = new Document(__dirname + "/document.js")
  //const classes = yield* doc.parseClasses()
  console.log(doc.toString())
})()

