const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
    icon: './roblox_phippy',
    ignore: [
      /node_modules/,
      /test/,
      /out/,
      /\.git/
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'LondonInRoblox', // Internal name for the app (used in the installer)
        authors: 'CNCF', // The name of the developer/company
        description: 'Retrieves the newest Roblox file for KubeCon Kids Day 2025',
        setupIcon: './roblox_phippy.ico', // Path to your icon for the installer
        setupExe: 'UpdateLondon.exe', // Custom name for the generated installer
        noMsi: false, // If true, prevents creating an MSI installer
      },
    },
  ],
};
