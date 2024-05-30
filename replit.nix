{ pkgs }: {
  environment.systemPackages = [
    pkgs.nodejs_22
    pkgs.wasilibc
  ];
  
  deps = [
    pkgs.oxlint
    pkgs.biome
    pkgs.nodePackages_latest.npm
    pkgs.nodePackages_latest.vscode-langservers-extracted
    pkgs.nodePackages_latest.typescript-language-server
  ];
}