const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const giftedLoadPlugins = (giftedDirectory) => {
    const giftedPlugins = [];
    let giftedPluginFileCount = 0;
    const mouricedevsLoadFiles = (giftedDir) => {
        const giftedEntries = fs.readdirSync(giftedDir);
        giftedEntries.forEach(giftedEntry => {
            const giftedEntryPath = path.join(giftedDir, giftedEntry);
            if (fs.lstatSync(giftedEntryPath).isDirectory()) {
                mouricedevsLoadFiles(giftedEntryPath);
            } else if (giftedEntryPath.endsWith('.js')) {
                try {
                    delete require.cache[require.resolve(giftedEntryPath)];
                    const giftedPlugin = require(giftedEntryPath);
                    giftedPlugin.filePath = giftedEntryPath;
                    giftedPlugins.push(giftedPlugin);
                    giftedPluginFileCount++;
                    console.log(chalk.bgHex('#ADD8E6').hex('#333').bold(` Loaded Plugin: ${path.basename(giftedEntryPath)} `));
                } catch (error) {
                    console.log(chalk.bgHex("#e74c3c").bold(` Error loading plugin at ${giftedEntryPath}:`, error ));
                }
            }
        });
    };
    const giftedResolvedDirectory = path.resolve(giftedDirectory);
    if (fs.existsSync(giftedResolvedDirectory) && fs.lstatSync(giftedResolvedDirectory).isDirectory()) {
        mouricedevsLoadFiles(giftedResolvedDirectory);
    } else {
        console.log(chalk.bgHex("#e74c3c").bold(` Invalid directory: ${giftedResolvedDirectory}` ));
    }
    return { plugins: giftedPlugins, pluginFileCount: giftedPluginFileCount };
};

const { plugins, pluginFileCount } = giftedLoadPlugins(path.join(process.cwd(), 'gifted'));
console.log(chalk.bgHex('#90EE90').hex('#333').bold(' All Plugins loaded! '));

module.exports = { plugins, pluginFileCount };
