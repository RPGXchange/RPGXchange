# Metadata

The `metadata.json` file is required in the root directory and contains essential information about the RPGX file.

## Properties

| Property     | Type   | Required | Default                                       | Description                                                                                                                                             |
| ------------ | ------ | -------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | string | Yes      | -                                             | The semi-unique identifier for the RPGX file; Must follow [resource id rules](../common/resource_ids.md)                                                |
| name         | string | No       | Value of `id`                                 | The user friendly name of the RPGX file                                                                                                                 |
| description  | string | No       | -                                             | The user friendly description of the RPGX file                                                                                                          |
| version      | string | No       | -                                             | The version of the RPGX file in the format of X.Y.Z with the Y and Z sections being optional; See [Versioning](../common/versioning.md#file-versioning) |
| type         | string | No       | `"source"` for RPGXS; `"character"` for RPGXC | The type of RPGX file: either `"source"` or `"character"`                                                                                               |
| namespace    | string | No       | -                                             | The root namespace of the RPGX file                                                                                                                     |
| authors      | array  | No       | `[]`                                          | A list of authors of the project. Can be strings or objects with name, email, url, and/or credit fields                                                 |
| dependencies | array  | No       | `[]`                                          | A list of required RPGX files. Can be strings or objects with id, and [version selector](../common/versioning.md#version-selectors)                     |
| rpgxVersion  | string | No       | -                                             | The target version of RPGX to use. See [Versioning](../common/versioning.md)                                                                            |
| platforms    | array  | No       | -                                             | List of supported platforms; See [Platform Compatibility](../implementation/compatibility.md)                                                           |

### Example

```json
{
  "id": "example",
  "name": "Example RPGX File",
  "description": "A comprehensive example of an RPGX file structure",
  "version": "1.0.0",
  "type": "source",
  "namespace": "example",
  "authors": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "url": "https://example.com/johndoe",
      "credit": "Creative design"
    },
    "Jane Smith"
  ],
  "dependencies": [
    {
      "id": "core",
      "version": "1.0"
    },
    "fantasy"
  ],
  "rpgxVersion": "0.1.0"
}
```

## Version Support

| Version | Support Level      | Notes                                                                                         |
| ------- | ------------------ | --------------------------------------------------------------------------------------------- |
| 0.1.0   | ➖ Partial Support | Support for id, name, description, version, namespace, authors, dependencies, and rpgxVersion |
| 0.2.0   | ✅ Support         | Added support for platform compatibility specifications                                       |
