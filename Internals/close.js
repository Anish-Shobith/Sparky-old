const chalk = require("chalk");
function closeApp() {
    console.log(chalk.red("Closing App"));
    setTimeout(() => process.exit(), 2 * 1000);
    }

    process.on('SIGINT', () => {
        closeApp();
        });
        
        process.on('SIGHUP', () => {
        closeApp();
        });
        
        process.on('SIGTERM', () => {
        closeApp();
        });