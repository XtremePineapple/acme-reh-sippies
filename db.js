console.log('deeBee')

const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://zhzewldqykkbed:dbac764262da9030a996c498ac4276be64de37b103c2491b77ac32bc9a82f834@ec2-52-203-160-194.compute-1.amazonaws.com:5432/d4929rupdc7ebp?ssl=true');
client.connect();

const sink = async() => {
    const SQL = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        DROP TABLE IF EXISTS recipies;
        DROP TABLE IF EXISTS chefs;
        CREATE TABLE chefs (
            id UUID PRIMARY KEY default uuid_generate_v4(),
            name VARCHAR(50) NOT NULL UNIQUE,
            CHECK (char_length(name) > 0)
        );
        CREATE TABLE recipies (
            id UUID PRIMARY KEY default uuid_generate_v4(),
            name VARCHAR(255) NOT NULL UNIQUE,
            "chefName" UUID REFERENCES chefs(id),
            CHECK (char_length(name) > 0)
        );
    `;
    client.query(SQL);

};

const createChef = async(chef) => {
    const SQL = `INSERT INTO chefs(name) values($1) returning *;`
    return (await client.query(SQL, [chef.name])).rows[0];
}
const createRecipie = async(recipie) => {
    const SQL = `INSERT INTO recipie(name) values($1) returning *;`
    return (await client.query(SQL, [recipie.name])).rows[0];
}

const readChefs = async() => {
    const SQL = `SELECT * FROM chefs`
    return (await client.query(SQL)).rows;
}
const readRecipies = async() => {
    const SQL = `SELECT * FROM recipies`
    return (await client.query(SQL)).rows;
}

const deleteChef = async(id) => {
    const SQL = `DELETE FROM chefs WHERE id= $1`
    await client.query(SQL, [id]);
}

module.exports = {
    sink,
    createChef,
    readChefs
};