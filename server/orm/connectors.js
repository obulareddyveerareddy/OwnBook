import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

let db;
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
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

  } else {
    db = new Sequelize('ownaccount', 'ownbook', 'veera@168', {
      host:'localhost',
      dialect: 'mysql'
    })
  }

const CodesModel = db.define('codes', {
  name: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING }
});

const CodevaluesModel = db.define('codevalues', {
  name: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  codeId:{type:Sequelize.INTEGER}
});
CodesModel.hasMany(CodevaluesModel);
CodevaluesModel.belongsTo(CodesModel);


const AccountsModel = db.define('accounts', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

const TransactionsModel = db.define('transactions', {
  label: { type: Sequelize.STRING },
  amount: { type: Sequelize.FLOAT },
  recieved: { type: Sequelize.BOOLEAN },
  given: { type: Sequelize.BOOLEAN },
  accountId:{type: Sequelize.INTEGER}
});

AccountsModel.hasMany(TransactionsModel);
TransactionsModel.belongsTo(AccountsModel);

db.sync();

const Accounts      = db.models.accounts;
const Transactions  = db.models.transactions;
const Codes         = db.models.codes;
const Codevalues    = db.models.codevalues;

export { Accounts, Transactions, Codes, Codevalues };