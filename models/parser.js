

// Regular expression for single line comment
const lineComment = /^\s*\/\/\s?(.*)$/
const commentHeader = /^\s*\/\/\s={3,}\s*$/


export class Parser {



  // ==============================
  // parse(RegExp) => Array<string>
  parse(expression) {
    if (!this.data) {
      throw new Error("No data given")
    }
    return this.data.match(expression)
  }

  // ==========================================
  // Parse comment lines from given line number
  // untill header if parsing up until header
  // parseComment(number, boolean = true) => String
  parseComment(startLine, up = true) {
    if (!this.data) {
      throw new Error("No data given")
    }
    const lines = this.data.split(/\n/)

    let lineNum = startLine
    let res = ""
    while (let line = lines[lineNum] && lineComment.test(line)) {
      const isHeader = commentHeader.test(line)
      if (up && isHeader) break
      res += lineComment.match(line)[0]
    }

    // TODO: parse out tags
    return res
  }
}
