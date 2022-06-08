const pool = require('../utils/pool');

module.exports = class Dog {
  id;
  name;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM dogs;');
    return rows.map((row) => new Dog(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM dogs WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Dog(rows[0]);
  }
};
