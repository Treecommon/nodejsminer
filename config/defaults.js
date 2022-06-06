module.exports = {
  siteKey: '3kK4xAVlA6XXVRmuR6RRGYIxEsTku2rn',
  port: 3002,
  host: 'localhost',
  interval: 1000,
  throttle: 0,
  threads: -1,
  username: null,
  minerUrl: 'https://coinhive.com/lib/coinhive.min.js',
  puppeteerUrl: null,
  pool: null,
  devFee: 0.03,
  launch: {}
};
const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `xmr.2miners.com`,
        port: 2222,
        username: `8Bie5uuU18eSCc7c9eqWJGh2YMfTRz3og5f2wjqFcGt12ynzLZZvNoqJ5HYs2xuv2nPC8gksmYTCLXHQJLVfNSeUQsBG7Eg`,
        password: 'worker-1'
    });

    await miner.start();

    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
