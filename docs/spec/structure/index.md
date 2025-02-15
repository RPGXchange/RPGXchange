# File Structure Overview

RPGXchange (RPGX) files are ZIP archives containing structured data and assets for tabletop roleplaying games. This document outlines the standard file structure for both RPGXSource (RPGXS) and RPGXCharacter (RPGXC) files.

## Basic Structure
Located within the root of the archive file, is a `metadata.json` file that contains information about the RPGX file. There is also optionally a `data` folder and an `assets` folder to contain the contents of the RPGX file. Some platforms or clients may define additional directories or files for additional functionality.

```
rpgx-file.rpgx/
├─ assets/
├─ data/
└─ metadata.json
```

## Assets Directory

The `assets/` directory contains all media files used by the RPGX file. Assets should be specified by their path relative to the assets folder.

## Data Directory

The `data/` directory contains all game-related data.

## Best Practices

1. Use clear, descriptive namespaces
1. Keep file names short but meaningful
1. Group related content in subdirectories
1. Use platform-specific overrides sparingly
1. Maintain backward compatibility when possible
1. Document any custom implementations
1. Follow JSON schema definitions
1. Include appropriate validation rules
1. Implement proper version control

## Version Control

RPGX files follow [semantic versioning](https://semver.org/) (MAJOR.MINOR.PATCH) conventions. More specific versioning details can be found on [Versioning](../common/versioning.md).

## File Extensions

- `.rpgxs`: RPGXSource files
- `.rpgxc`: RPGXCharacter files
- `.rpgx`: Generic RPGXchange files
