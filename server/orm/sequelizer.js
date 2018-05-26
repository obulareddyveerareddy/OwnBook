import Sequelize from 'sequelize';

let db;
if (process.env.DATABASE_URL) {
    console.log('-------------- process.env.DATABASE_URL -----------');
    console.log(process.env.DATABASE_URL);
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
    console.log(match);
    db = new Sequelize(match[5], match[1], match[2], {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging: false,
        dialectOptions: {
            ssl: true
        }
    });
    if(db){
      console.log('--------------- Connection established succesfully ---------------');
    }else{
      console.log('--------------- Connection failed  ---------------');
    }

} else {
    db = new Sequelize('ownaccount', 'ownbook', 'veera@168', {
      host:'localhost',
      dialect: 'mysql'
    })
}

export default db;