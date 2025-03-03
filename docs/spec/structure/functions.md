# Functions

Functions are operations that are defined within RPGX files inside of `functions.json` files located in the ZIP archive. These files must be located within the `data` folder in a directory structure that corresponds to their [namespace](./namespaces.md).

## Location

Functions must be organized in `functions.json` files within the `data` directory. The path to the file should match the namespace of the functions. For example:

- Functions in namespace `combat.stats` should be in `/data/combat/stats/functions.json`
- Functions in namespace `character` should be in `/data/character/functions.json`

## Structure

Functions are defined as JSON objects with specific properties that determine their behavior and characteristics.

### Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|----------|-------------|
| parameters | object | No | `{}` | Variable definitions for the parameters of the function |
| body | formula string | Yes | - | An expression for the calculation of the function |
| returnType | string | No | `"any"` | The data type of the variable; See [Data Types](../common/data_types.md) |
| description | string | No | A user-friendly description of what the variable represents |

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

### Examples

```json
{
    "health": {
        "type": "integer",
        "value": 10.7        // Coerced to 11
    },
    "name": {
        "type": "string",
        "value": 42          // Coerced to "42"
    },
    "active": {
        "type": "boolean",
        "value": 1           // Coerced to true
    }
}
```

## Best Practices

1. Use descriptive variable names
2. Keep namespaces organized
3. Consider variable dependencies
4. Use type coercion sparingly
