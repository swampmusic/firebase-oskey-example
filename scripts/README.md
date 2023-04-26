# Scripts

Bellow are the instructions for the various scripts required for build, test or
git (push, commit, ...).

## Pre commit check

Pre commit checks consist in linting both functions and test scripts. These
checks are done also during actions on push request to master, push to master or
release creation.

Copy `pre-commit` script to `<root>/.git/hooks`:

```sh
cp scripts/pre-commit ./git/hooks
```
