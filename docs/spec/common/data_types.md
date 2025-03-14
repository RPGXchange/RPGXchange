# Data Types

There are various data types available for values within an RPGX file. The available data types are integer, number, string, boolean, null, and array.

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

### Array

Arrays are ordered collections of values, which can be of any valid data type including other arrays.
Example: `[1, 2, 3]`, `["red", "green", "blue"]`, `[true, 42, "mixed", [1, 2]]`

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
4. Individual values are wrapped in arrays when type is `array`
5. Invalid conversions result in `undefined`

## Version Support

| Version | Support Level      | Notes                                                  |
| ------- | ------------------ | ------------------------------------------------------ |
| 0.1.0   | ➖ Partial Support | Support for integer, number, string, boolean, and null |
| 0.2.0   | ✅ Support         | Added array support                                    |
