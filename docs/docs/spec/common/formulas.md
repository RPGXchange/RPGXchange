# Formulas

Formulas in RPGX allow dynamic computation of values. They can be used in variables, conditions, and other dynamic fields.

## Basic Syntax

In non-dedicated fields, formulas are enclosed in curly braces. In fields expecting a formula, enclosing curly braces are not necessary.

## Operators

| Operator | Description | Example | Notes |
|----------|-------------|---------|-------|
| `+` | Addition/concatenation | `1 + 2`, `"a" + "b"` | When either operand is a string, the other operand will be converted into a string; else, both values are converted to numbers when possible; otherwise, results in `undefined` |
| `-` | Subtraction | `5 - 3` | Both operands are converted to numbers when possible; otherwise, results in `undefined` |
| `*` | Multiplication | `4 * 2` | Both operands are converted to numbers when possible; otherwise, results in `undefined` |
| `/` | Division | `10 / 2` | Both operands are converted to numbers when possible; otherwise, results in `undefined` |
| `%` | Modulo | `7 % 3` | Both operands are converted to numbers when possible; otherwise, results in `undefined` |
| `==` | Equality | `x == y` |  |
| `!=` | Inequality | `x != y` |  |
| `>` | Greater than | `x > y` | If either value is not comparable, then `undefined` is returned |
| `>=` | Greater or equal | `x >= y` | If either value is not comparable, then `undefined` is returned |
| `<` | Less than | `x < y` | If either value is not comparable, then `undefined` is returned |
| `<=` | Less or equal | `x <= y` | If either value is not comparable, then `undefined` is returned |
| `&&` | Logical AND | `x > 0 && y < 10` | Both operands are coerced into boolean values |
| `||` | Logical OR | `x < 0 || x > 10` | Both operands are coerced into boolean values |

## Operator Precedence

Operators are evaluated in the following order (highest to lowest):

1. Parentheses `()`
2. Multiplication/Division/Modulo `* / %`
3. Addition/Subtraction `+ -`
4. Comparison `< <= > >=`
5. Equality `== !=`
6. Logical AND `&&`
7. Logical OR `||`

## Variable References

Variables and other resources can be referenced using either its id or namespace and id. When referencing a variable with its namespace, use the namespace path followed by a colon followed by the resource id:

- Resource Id: `strength`
- Namespaced reference: `character.stats:strength`

## Built-in Functions

| Function | Description | Example |
|----------|-------------|---------|
| `floor(x)` | Round down | `floor(3.7)` -> `3` |
| `ceil(x)` | Round up | `ceil(3.2)` -> `4` |
| `round(x)` | Round to nearest | `round(3.5)` -> `4` |
| `min(x,y)` | Minimum value | `min(5, 3)` -> `3` |
| `max(x,y)` | Maximum value | `max(5, 3)` -> `5` |
| `if(c,t,f)` | Conditional | `if(x>0, x, 0)` |
| `length(x)` | Gets the length of a string | `length("xyz")` -> 3 |

## Error Handling

Any time an error occurs, `undefined` can be used to continue calculation. Scenarios that may warrant use of `undefined` includbut are not limited to the following cases:

- Division by zero
- Invalid type conversions
- Missing variable references
- Invalid function arguments
- Comparison of incompatible types
