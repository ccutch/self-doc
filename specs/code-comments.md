# Code comments
Code comments are the source of data that we use for generating our documentation and test files.

### Basics
The self-doc parser is looking for comments in code that are directly above the code being documented in a continuous block such as the examples below. All comments to be parsed must start with a header which is four or more adjacent equal marks seen in both examples blow. the parser should only be looking at functions variables and classes that are publically accessable by default.

<br>

**Mutliple single line comments:**
```javascript
// ====
// ...
// ...
```

**Multiline comment:**
```javascript
/** ===
 * ...
 * ...
 */
```

### Parts of a comment

 + [Header](#header)
 + [Decorators](#decorators)
 + [Definition](#definition)
 + [Description](#description)
 + [Tags](#tags)

### Header
Lets the parser know where the comment starts for parsing nonparsable comments such as jsdoc should be above header. The header should be a minimum of four equal signs, which is not an opperator in javascript, and looks nice. Required.
<br>
**Example:**
```javascript
// ================
//
//
function testFunction(input) {
  return input.substr(1)
}

// ====
const name = "Connor"
```

### Decorators
These are tags that come before the definition of the subject. Mostly used for documentation templates. Optional.
<br>
**Example:**
```javascript
// ================
// @name Test Function
//
function testFunction(input) {
  return input.substr(1)
}

// ====
const name = "Connor"
```

### Definition
Definition of the subject. First line of comment that is not a tag, Required, pattern matched to subject to interlay typing, return types, and optional parameters.
<br>
**Example:**
```javascript
// ================
// @name Test Function
// testFunction(string) => string
function testFunction(input) {
  return input.substr(1)
}

// ==== string
const name = "Connor"
```

### Description
Description of subject, next multilines before tags. Optional.
<br>
**Example:**
```javascript
// ================
// @name Test Function
// testFunction(string) => string
// Test function for demonstration of self-doc
function testFunction(input) {
  return input.substr(1)
}

// ==== string
const name = "Connor"
```

### Tags
Tags about subject, used for documentation and test templating. Run tag used for example code and test generation
<br>
**Example:**
```javascript
// ================
// @name Test Function
// testFunction(string) => string
// Test function for demonstration of self-doc
//
// @run
//  const name = "Connor"
//  assert(testFunction(name) === "onnor")
//  assert(name === "Connor")
function testFunction(input) {
  return input.substr(1)
}

// ==== string
const name = "Connor"
```
