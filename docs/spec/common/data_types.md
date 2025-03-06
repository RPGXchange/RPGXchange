# Data Types

There are various data types available for values within an RPGX file. The available data types are integer, number, string, boolean, and null.

## Available Types

### Integer

Integers represent whole numbers without any decimal points.
Example: `42`, `-17`, `0`

### Number

Numbers represent both integer and floating-point values.
Example: `3.14`, `-0.001`, `2.5e-4`

### String

Strings are sequences of characters enclosed in double quotes. They can contain any Unicode characters.
Example: `"Hello"`, `"Player 1"`, `"🎮"`

### Boolean

Booleans represent logical values: true or false.
Example: `true`, `false`

### Null

Null represents the absence of any value.
Example: `null`

## Type Strings

Type strings are a JSON string that represents a given data type. A type string can contain the name of any supported data type or the word `any` for any data type.

## Type Coersion
When a value doesn't match the declared type:

1. Numbers are rounded to integers for `integer` type
2. Non-boolean values are converted to boolean (`0`, `""`, become `false`; `null` converts to `false` if value is non-nullable)
3. All other values are converted to strings when type is `string` (`undefined` and `null` are converted to empty string)
4. Invalid conversions result in `undefined`
