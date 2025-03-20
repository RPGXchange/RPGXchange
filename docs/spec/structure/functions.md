# Functions

Functions are operations that are defined within RPGX files inside of `functions.json` files located in the ZIP archive. These files must be located within the `data` folder in a directory structure that corresponds to their [namespace](./namespaces.md).

## Location

Functions must be organized in `functions.json` files within the `data` directory. The path to the file should match the namespace of the functions. For example:

- Functions in namespace `combat.stats` should be in `/data/combat/stats/functions.json`
- Functions in namespace `character` should be in `/data/character/functions.json`

## Structure

Functions are defined as JSON objects with specific properties that determine their behavior and characteristics.

### Properties

| Property    | Type           | Required | Default   | Description                                                                                   |
| ----------- | -------------- | -------- | --------- | --------------------------------------------------------------------------------------------- |
| parameters  | object         | No       | `{}`      | Variable definitions for the parameters of the function                                       |
| body        | formula string | Yes      | -         | An expression for the calculation of the function                                             |
| returnType  | string         | No       | `"any"`   | The data type of the variable; See [Data Types](../common/data_types.md)                      |
| description | string         | No       | `""`      | A user-friendly description of what the variable represents                                   |
| platforms   | array          | No       | undefined | List of supported platforms; See [Platform Compatibility](../implementation/compatibility.md) |

### Example

```json
{
  "calcModifier": {
    "parameters": {
      "abilityScore": {
        "type": "integer"
      }
    },
    "body": "{floor((abilityScore - 10) / 2)}",
    "returnType": "integer",
    "description": "Calculates the modifier score for a given ability score"
  }
}
```

## Version Support

| Version | Support Level    | Notes                               |
| ------- | ---------------- | ----------------------------------- |
| 0.1.0   | ❌ Not Supported |                                     |
| 0.2.0   | ✅ Supported     | Initial implementation of functions |
