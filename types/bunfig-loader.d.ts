declare module "*bunfig.toml" { const content: {
  preload: [ "./loader/replit-config-loader.ts", "./loader/bunfig-loader.ts" ],
  loader: {
    ".replit": "toml",
  },
  install: {
    scopes: {
      "@jsr": "https://npm.jsr.io",
    },
  },
}; export default content }