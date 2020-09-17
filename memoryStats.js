const os = require('os');

setInterval(() => {
    const { freemem, totalmem } = os;

    const byteToMega = 1024 * 1024;

    const totalMemory = parseInt(os.totalmem() / byteToMega);
    const freeMemory = parseInt(os.freemem() / byteToMega);
    const percentUsageMemory = parseInt((freeMemory / totalMemory) * 100);

    const memoryStats = {
        free: `${freeMemory} MB`,
        total: `${totalMemory} MB`,
        usage: `${percentUsageMemory}%`,
    };

    console.clear();
    console.log('====== Memory Stats ======');
    console.table(memoryStats);

}, 1000);