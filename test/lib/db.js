const { expect } = require('chai');

const { query } = require('../../lib/db');

describe('Query test', () => {
  afterEach(async () => {
    const q1 = 'DELETE FROM test WHERE `id` >= ?;';
    await query(q1, [5]);
    const q2 = 'ALTER TABLE test DROP COLUMN IF EXISTS `else`;';
    await query(q2, []);
  });

  it('runs query successfully', async () => {
    const q = 'SELECT "Hello" AS Kenobi';
    const result = await query(q, []);
    // Returns an array of JSONs
    expect(result[0]).to.deep.equal({ Kenobi: 'Hello' });
  });

  it('can write and then read it', async () => {
    const q1 = `
      CREATE TABLE IF NOT EXISTS test (
        id INT,
        some VARCHAR(10),
        thing TEXT,
        PRIMARY KEY (id)
      );
    `;
    await query(q1, []);
    const q2 = 'INSERT INTO test (`id`, `some`, `thing`) VALUES (?, ?, ?)';
    await query(q2, [5, 'hello', 'there']);

    const q3 = 'SELECT id, some, thing FROM test';
    const result = await query(q3, []);
    expect(result[0]).to.deep.equal({
      id: 5,
      some: 'hello',
      thing: 'there',
    });
  });

  it('can alter tables', async () => {
    const q1 = 'ALTER TABLE test ADD COLUMN `else` VARCHAR(5);';
    await query(q1, []);
    const q2 = 'INSERT INTO test (`id`, `some`, `thing`, `else`) VALUES (?, ?, ?, ?)';
    await query(q2, [6, 'hello', 'there', 'test']);

    const q3 = 'SELECT `id`, `some`, `thing`, `else` FROM test';
    const result = await query(q3, []);
    expect(result[0]).to.deep.equal({
      id: 6,
      some: 'hello',
      thing: 'there',
      else: 'test',
    });
  });
});
