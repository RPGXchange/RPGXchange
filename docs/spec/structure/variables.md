# Variables

Variables are values that are stored within a RPGX file inside of `variables.json` files located in the ZIP archive. These files must be located within the `data` folder in a directory structure that corresponds to their [namespace](./namespaces.md).

## Location

Variables must be organized in `variables.json` files within the `data` directory. The path to the file should match the namespace of the variables. For example:

- Variables in namespace `combat.stats` should be in `/data/combat/stats/variables.json`
- Variables in namespace `character` should be in `/data/character/variables.json`

## Structure

Variables are defined as JSON objects with specific properties that determine their behavior and characteristics.

### Properties

| Property    | Type   | Required | Default   | Description                                                                                   |
| ----------- | ------ | -------- | --------- | --------------------------------------------------------------------------------------------- |
| type        | string | No       | `"any"`   | The data type of the variable; See [Data Types](../common/data_types.md)                      |
| description | string | No       | -         | A user-friendly description of what the variable represents                                   |
| value       | varies | No       | `null`    | The value of the variable                                                                     |
| platforms   | array  | No       | undefined | List of supported platforms; See [Platform Compatibility](../implementation/compatibility.md) |

### Example

```json
{
  "strength": {
    "type": "integer",
    "description": "The physical strength attribute of the character",
    "value": 10,
    "platforms": [
      {
        "id": "rpgxjs",
        "version": "1.0.0"
      }
    ]
  },
  "bonus": {
    "type": "number",
    "description": "Calculated bonus damage based on strength",
    "value": "{floor(character.stats.strength / 2)}"
  },
  "isAlive": {
    "type": "boolean",
    "description": "Indicates if the character is currently alive",
    "value": true
  },
  "title": {
    "type": "string",
    "description": "The character's earned title",
    "value": "Novice"
  }
}
```

## Implied Variable Definition

For simplicity, variables can also be defined using an implied definition where the value is specified directly. This is equivalent to defining a variable with only the `value` property. It's particularly useful when assigning values to variables in a character file where the variable has already been defined in a source file.

### Implied Definition Syntax

```json
{
  "variableName": value
}
```

This implied definition is valid for all data types except `object` to avoid potential ambiguity between an object that represents a variable definition and an object that is the actual value of the variable.

### Implied Definition Example

```json
{
  "strength": 10,
  "intelligence": 12,
  "isAlive": true,
  "title": "Novice",
  "skills": ["stealth", "archery", "diplomacy"]
}
```

This is equivalent to:

```json
{
  "strength": {
    "value": 10
  },
  "intelligence": {
    "value": 12
  },
  "isAlive": {
    "value": true
  },
  "title": {
    "value": "Novice"
  },
  "skills": {
    "value": ["stealth", "archery", "diplomacy"]
  }
}
```

## Value Field

The `value` field can contain either:

- A literal value matching the specified type
- A formula string enclosed in curly braces `{}`

### Type Validation

Values are validated against their declared type:

| Type      | Valid Values         | Examples                                       |
| --------- | -------------------- | ---------------------------------------------- |
| `integer` | Whole numbers        | `5`, `{floor(3.7)}`                            |
| `number`  | Any numeric value    | `3.14`, `{character.abilities:strength * 1.5}` |
| `string`  | Text strings         | `"Hello"`, `{name + " " + title}`              |
| `boolean` | True/false values    | `true`, `{health > 0}`                         |
| `array`   | List of values       | `[]`, `[1,2,3]`, `[[], [1], [2]]`              |
| `object`  | Key-value pairs      | `{}`, `{"x":1}`, `{"a":{"b":2}}`               |
| `null`    | Null value only      | `null`                                         |
| `any`     | Any valid JSON value | `42`, `"text"`, `true`                         |

### String Interpolation

String values can include embedded expressions using curly braces `{}`. These expressions are evaluated and their results are inserted into the string.

To include literal curly braces in a string, use double curly braces `{{}}`.

#### Example

```json
{
  "greeting": {
    "type": "string",
    "value": "Hello, {character:name}!" // Evaluates character:name
  },
  "status": {
    "type": "string",
    "value": "HP: {{current}} / {maxHealth}" // Shows "{current}" literally and evaluates maxHealth
  }
}
```

## Best Practices

1. Use descriptive variable names
2. Keep namespaces organized
3. Consider variable dependencies
4. Use type coercion sparingly
5. Use implied variable definitions when appropriate for cleaner character files

## Version Support

| Version | Support Level      | Notes                                                                                                  |
| ------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| 0.1.0   | ➖ Partial Support | Support for integer, number, string, boolean, and null                                                 |
| 0.2.0   | ✅ Support         | Added array and object data types, implied variable definitions, platform compatibility specifications |
