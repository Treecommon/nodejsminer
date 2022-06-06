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
