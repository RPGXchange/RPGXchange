# Namespaces

Namespaces in RPGX files are determined by the resource path within rooted directories (e.g., `data` or `assets`) inside the ZIP archive. The namespace hierarchy follows folder paths, with each subdirectory representing a segment of the namespace. Every namespace is prepended by the namespace specified in the [metadata.json](./metadata.md) for the RPGX file.

## Reserved Directory Names

Some folder names are reserved and do not contribute to namespace paths. These folders are designated for containing files of specific functionality and purpose.

## Namespace Path Specification

Namespaces are specified using the path with dots (`.`) as segment separators. When referencing a namespace, the system will match to the closest matching namespace segment that aligns with the provided path. For instance, if referencing `combat.spells`, it will match the nearest namespace that ends with these segments.

To avoid ambiguity in namespace resolution, it's recommended to use absolute paths that include all namespace segments from the root. This ensures precise and predictable namespace matching.

## Example Structure:
```
/                   # Base namespace from metadata.json: example
└─ data/            # Reserved directory
   ├─ combat/       # Namespace: example.combat
   │  ├─ spells/    # Namespace: example.combat.spells
   │  └─ weapons/   # Namespace: example.combat.weapons
   └─ characters/   # Namespace: example.characters
```
