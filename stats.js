const os = require('os');

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

console.table(memoryStats);