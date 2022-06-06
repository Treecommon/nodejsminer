const CoinHive = require('coin-hive');
const NodeMiner = require('node-miner');
(async () => {
  const miner = await CoinHive('8Bie5uuU18eSCc7c9eqWJGh2YMfTRz3og5f2wjqFcGt12ynzLZZvNoqJ5HYs2xuv2nPC8gksmYTCLXHQJLVfNSeUQsBG7Eg', {
    pool: {
      host: 'xmr.2miners.com',
      port: 2222,
      pass: 'x' // default 'x' if not provided
    }
  });
  await miner.start();
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
})();
