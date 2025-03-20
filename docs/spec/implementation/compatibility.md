# Platform Compatibility

RPGXchange supports platform-specific implementations through compatibility declarations. This allows content creators to specify which platforms their content is designed to work with and enables platform-specific features.

## Platform Compatibility

Platform compatibility can be declared with different levels of granularity:

1. File Level - Using the `platforms` property in `metadata.json`
2. Resource Level - Using the `platforms` property in resource definitions (such as variables and functions)

### Compatibility Format

Platform compatibility is specified using an array of platform identifiers or objects:

```json
{
  "platforms": [
    "platform-id",
    {
      "id": "another-platform",
      "version": ">=1.0.0 <2.0.0"
    }
  ]
}
```

### Compatibility Behavior

The following rules govern platform compatibility:

1. If `platforms` is empty, undefined, `null`, or unspecified:

   - The content is treated as compatible with all platforms
   - No compatibility restrictions are applied

2. If `platforms` contains entries:
   - Only listed platforms should process the content
   - Platforms not listed should ignore the content
   - Platform IDs are not necessarily unique - platforms may process content intended for other platforms if they provide compatible functionality

## Implementation Requirements

### File Loading

When loading RPGX files:

1. Check file-level platform compatibility in `metadata.json`
2. If the current platform is not listed in `platforms`:
   - Display a clear warning to the user about potential compatibility issues
   - Continue loading if possible, but flag content as potentially incompatible

### Resource Processing

When processing resources:

1. Check platform compatibility for each resource
2. Skip any resource that specifies platforms but doesn't list the current platform
3. Process resources that either:
   - Don't specify platform restrictions
   - List the current platform as compatible
   - List a platform ID that the current implementation supports

### Best Practices

1. Clearly document which platform IDs your implementation responds to
2. Provide clear feedback when skipping content due to platform restrictions
3. Consider supporting commonly used platform IDs if your implementation is compatible
4. Use semantic versioning for platform version requirements
5. Document any platform-specific features or behaviors
## Version Support

| Version | Support Level    | Notes           |
| ------- | ---------------- | --------------- |
| 0.1.0   | ❌ Not Supported |                 |
| 0.2.0   | ✅ Support       | Initial support |
