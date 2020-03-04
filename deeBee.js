console.log('deeBee')

const pg = requires('db');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_reh_sippies');
client.connect();

const sink = async() => {
    const SQL = ''
};

module.exports = {
    sink
};