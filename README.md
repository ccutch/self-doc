# Self Doc

This is a self documenting library build for documenting and testing Node applications, based on golang's [godoc](https://godoc.org/golang.org/x/tools/cmd/godoc). I was inspired to start this project after not being unimpressed by other documentation tools such as jsdoc. This library is meant to run in a Node 5+ environment.

## Installation

`npm install -g self-doc`


### Usage
Generate documentation for given files to docs directory
<br>
`self-doc docs -o docs <input>`

Generate tests for given files to tests directory
<br>
`self-doc test -o tests <input>`


### Expected Behavior
For a more detailed description of expect outputs reference specs directory

**Input:**
```javascript
// ====
// @name Validate Name
// validatName(string) => boolean
// Validates the name of a person.
// @run
//  const name = "Connor McCutcheon"
//  assert(validatName(name), true)
//  assert(validatName("0$!@#"), false)
export function validatName(input) {
  return /^[a-zA-Z ]+$/.test(input)
}
```

**Output Documentation:**
```html
...
<section id="validateName">
  <h2>Validate Name</h2>
  <code>validateName(input: string): boolean</code>
  <p>
    Validates the name of a person.
  </p>
  <pre>
    <code>
      import { validateName } from "this-file"

      const name = "Connor McCutcheon"
      assert(validatName(name) === true)
      assert(validatName("0$!@#") === false)
    </code>
  </pre>
</section>
...
```
