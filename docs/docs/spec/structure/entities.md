# Entities

Entities represent game objects like items, creatures, spells, etc. within RPGX files. Each entity is defined in its own JSON file located in the `entities` directory within the appropriate [namespace](./namespaces.md) structure.

## References

Entities can be referenced using a hashtag followed by the entity ID, optionally including the namespace of the entity:

- `#broadsword` - References entity with ID "broadsword"
- `#item.weapon:broadsword` - References entity with ID "broadsword" in namespace "item.weapon"

## Location

Entities must be stored as individual JSON files within `entities` directories inside the `data` folder, using the path as the namespace and the filename (without the `.json` extension) as the ID of the entity. For example:

- Entity in namespace `item.weapon` with ID `broadsword` should be in `/data/item/weapon/entities/broadsword.json`
- Entity in namespace `character.class` with ID `wizard` should be in `/data/character/class/entities/wizard.json`

## Structure

Entities are defined as JSON objects with specific properties that determine their behavior and characteristics.

### Properties

| Property    | Type   | Required | Default | Description                                                                      |
| ----------- | ------ | -------- | ------- | -------------------------------------------------------------------------------- |
| inherits    | array  | No       | `[]`    | IDs of entities this entity inherits from                                        |
| description | string | No       | `""`    | A user-friendly description of what this entity represents                       |
| properties  | object | No       | `{}`    | Property values and definitions for this entity; See [Variables](./variables.md) |
| parameters  | object | No       | `{}`    | Properties that inheriting entities must define; See [Variables](./variables.md) |

### Example

```json
{
  "inherits": ["baseWeapon"],
  "description": "A standard military-grade broadsword",
  "properties": {
    "name": "Broadsword",
    "damage": {
      "type": "integer",
      "value": 8
    },
    "weight": 3,
    "cost": 15,
    "damageType": "slashing"
  },
  "parameters": {
    "material": {
      "type": "string",
      "description": "The primary material the weapon is made from"
    }
  }
}
```

## Inheritance

Entities support multiple inheritance through the `inherits` array. Properties are merged following these rules:

1. Properties from inherited entities are applied in order of appearance
2. Only properties defined in `parameters` can be overridden by inheriting entities
3. Attempting to override a property that isn't defined in `parameters` will not be seen by the inherited entity

### Example with Inheritance

```json
// BaseWeapon (baseWeapon.json)
{
  "properties": {
    "weight": 1,
    "durability": 100
  },
  "parameters": {
    "hands": {
      "type": "integer",
      "description": "Number of hands required to wield"
    },
    "damageType": {
      "type": "string",
      "description": "Type of damage dealt by the weapon"
    }
  }
}

// Sword (sword.json)
{
  "inherits": ["baseWeapon"],
  "properties": {
    "hands": 2,              // Valid - defined in baseWeapon's parameters
    "damageType": "slashing" // Valid - defined in baseWeapon's parameters
  }
}
```

## Version Support

| Version | Support Level    | Notes                              |
| ------- | ---------------- | ---------------------------------- |
| 0.1.0   | ❌ Not Supported |                                    |
| 0.2.0   | ✅ Supported     | Initial implementation of entities |
