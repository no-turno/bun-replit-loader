declare module "*.replit" { const content: {
  run: "bun run ./index.ts",
  entrypoint: "./index.ts",
  nix: {
    channel: "unstable",
  },
  env: {
    XDG_CONFIG_HOME: "/home/runner/.config",
    XDG_CONFIG_CACHE: "/home/runner/.cache",
    BUN_INSTALL: "/home/runner/.config/.bun",
    BUN_CONFIG_MAX_HTTP_REQUESTS: "512",
    BUN_RUNTIME_TRANSPILER_CACHE_PATH: "0",
    BUN_CONFIG_NO_CLEAR_TERMINAL_ON_RELOAD: "1",
    npm_config_prefix: "/home/runner/.config/npm/node_globals",
    PATH: "/home/runner/.config/.bun/bin:/home/runner/.config/npm/node_globals/bin:/home/runner/$REPL_SLUG/node_modules/.bin",
  },
  languages: {
    javascript: {
      pattern: "**/{*.ts,*.js}",
      languageServer: {
        start: "typescript-language-server --stdio",
      },
    },
    json: {
      pattern: "**/{*.json,*.jsonc}",
      languageServer: {
        start: "vscode-json-language-server --stdio",
      },
    },
  },
  packager: {
    language: "nodejs",
    features: {
      enabledForHosting: false,
      guessImports: true,
      packageSearch: true,
    },
  },
}; export default content }