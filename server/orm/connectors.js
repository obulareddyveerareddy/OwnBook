import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

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
  
const AppUserModel = db.define('app_user', {
  displayName:{ type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  googleRefId:{ type: Sequelize.STRING },
});

const AccountsModel = db.define('accounts', {
  bankName:{ type: Sequelize.STRING },
  accountHolderName:{ type: Sequelize.STRING },
  accountNumber:{ type: Sequelize.STRING },
  aliasName:{ type: Sequelize.STRING },
  accountType:{ type: Sequelize.STRING },
  appUserId:{ type: Sequelize.INTEGER },
});

const CardDetailsModel = db.define('card_details', {
  accountId:{type: Sequelize.INTEGER},
  detailEntity:{ type: Sequelize.STRING },
  detailValue:{ type: Sequelize.STRING },
})

AppUserModel.hasMany(AccountsModel);
AccountsModel.hasMany(CardDetailsModel);
db.sync();

const AppUser     = db.models.app_user;
const Accounts    = db.models.accounts;
const CardDetails = db.models.card_details;

export { AppUser, Accounts, CardDetails };