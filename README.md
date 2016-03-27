# Self Doc

This is a self documenting library build for documenting and testing Node applications, based on golang's [godoc](https://godoc.org/golang.org/x/tools/cmd/godoc). I was inspired to start this project after not being unimpressed by other documentation tools such as jsdoc. This library is meant to run in a Node 5+ environment.

## Installation

`npm install -g self-doc`


### Usage
Generate documentation for given files to docs directory
<br>
`self-doc doc -o docs <input>`

Generate tests for given files to tests directory
<br>
`self-doc test -o tests <input>`


### Expected Behavior
For a more detailed description of expect outputs reference specs directory
<br>
This example is for a public function.

**Input:**
```javascript
// ====
// @name Validate Name
// validateName(string) => boolean
// Validates the name of a person.
// @run
//  const name = "Connor McCutcheon"
//  assert(validateName(name), true)
//  assert(validateName("0$!@#"), false)
export function validateName(input) {
  return /^[a-zA-Z ]+$/.test(input)
}
```

<br>
**Output Documentation:**
```html
...
<section id="validateName">
  <h2>Validate Name</h2>
  <code>validateName(input: string): boolean</code>
  <p>
    Validates the name of a person.
  </p>
  <h4>Example:</h4>
  <pre>
    <code>
import { validateName } from "base-file"

const name = "Connor McCutcheon"
assert(validateName(name) === true)
assert(validateName("0$!@#") === false)
    </code>
  </pre>
</section>
...
```

<br>
**Output Test:**
```javascript
// Test imports and setup above ...
import { validateName } from "base-file"
const tester = {}

describe("#validateName", () => {
  it("should run basic use case", () => {
    const name = "Connor McCutcheon"
    assert(validateName(name) === true)
    assert(validateName("0$!@#") === false)
  })
})
```

### Contributing
If you would like to contribute to this project all help is welcome please just fork this and make a pull request. Please follow this the git naming convension below and use eslint (config file provided) for code styling. If you run into an issue report in this repositories issues and I will respond as soon as posible.

**Git branch naming**
 + Feature branch: `feature/<name>`
 + Hotfix branch: `hotfix/<name>`
 + Refactoring/Cleaning: `refactoring/<name>`
