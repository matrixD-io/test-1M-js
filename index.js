const fs = require('fs').promises;

/**
 * Returns the contents of 1M.bin.
 *
 * @returns {Promise<Buffer>}
 */
module.exports = async function () {
  const data = await fs.readFile('1M.bin', 'binary');
  return Buffer.from(data);
};
