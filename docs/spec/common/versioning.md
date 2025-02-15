# Versioning

## File Versioning

RPGX files should include a version number that follows Semantic Versioning ([SemVer](https://semver.org/)) principles. The version number should be specified in the format `MAJOR.MINOR.PATCH`:

- `MAJOR` version changes indicate incompatible modifications
- `MINOR` version changes add functionality in a backward-compatible manner
- `PATCH` version changes include backward-compatible bug fixes

For example, an RPGX file at version `1.2.3` indicates:

- Major version: 1
- Minor version: 2
- Patch version: 3

We strongly recommend using SemVer to ensure consistent version management and compatibility checking across RPGX files.

### Version Selectors

Version selectors follow semantic versioning (SemVer) rules and can be expressed in several ways:

| Selector  | Description               | Example                               |
| --------- | ------------------------- | ------------------------------------- |
| `=x.y.z`  | Exact version match       | `=1.2.3` matches only 1.2.3           |
| `>x.y.z`  | Greater than version      | `>1.2.3` matches 1.2.4, 1.3.0, 2.0.0  |
| `>=x.y.z` | Greater than or equal to  | `>=1.2.3` matches 1.2.3, 1.2.4, 1.3.0 |
| `<x.y.z`  | Less than version         | `<1.2.3` matches 1.2.2, 1.1.0         |
| `<=x.y.z` | Less than or equal to     | `<=1.2.3` matches 1.2.3, 1.2.2, 1.1.0 |
| `x.y.z`   | Exact version (= implied) | `1.2.3` matches only 1.2.3            |

Multiple selectors can be combined:

- Using spaces for AND: `>=1.2.0 <2.0.0`
- Using `||` for OR: `1.2.3 || >=1.3.0 <2.0.0`

Prerelease versions (e.g., `1.2.3-alpha.1`) are only included when explicitly specified in the version selector.
