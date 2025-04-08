(When an unknown command is used, pnpm will search for a script with the given name, so `pnpm run lint` is the same as `pnpm lint`. If there is no script with the specified name, then pnpm will execute the command as a shell script, so you can do things like `pnpm eslint`)[https://pnpm.io/pnpm-cli]

```console
% pnpm store prune
% pnpm cleandep
% pnpm install
% pnpm test
```
