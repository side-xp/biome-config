# Sideways Experiments' Biome config

A few Biome config files shared across Sideways Experiments projects.

## Usage

In your Node project, you must use Biome as your linting & formatting tool in order to use these configurations.

Create a `biome.json` file at the root of your project, and add an `extends` rule with the appropriate config file:

```json
{ "extends": ["@side-xp/biome-config"] }
```

Our rules force using `LF` line-endings format. To make sure that your system doesn't conflict with this rule, you can add a `.gitattributes` at the root of your project, with the following content:

```txt
* text=auto eol=lf

```

### For Node library projects

Prefer using the `biome.lib.json` variant of our config:

```json
{ "extends": ["@side-xp/biome-config/biome.lib.json"] }
```

It enforces a few rules for libraries specifically, like considering an error to let `console` calls in the code unless they're used in tests.

---

Crafted and maintained with love by [Sideways Experiments](https://sideways-experiments.com)

(c) 2022-2026 Sideways Experiments