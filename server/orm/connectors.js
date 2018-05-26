import Sequelize  from 'sequelize';
import sequelizer from './sequelizer';
  
const CodeModel = sequelizer.define('code', {
  codeId:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name:{ type: Sequelize.STRING },
  description: { type: Sequelize.STRING }
});

const CodeValuesModel = sequelizer.define('code_values', {
  codeValueId:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name:{ type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  codeId:{type: Sequelize.INTEGER}
});

const AppUserModel = sequelizer.define('app_user', {
  displayName:{ type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  googleRefId:{ type: Sequelize.STRING },
});

const AccountsModel = sequelizer.define('accounts', {
  bankName:{ type: Sequelize.STRING },
  accountHolderName:{ type: Sequelize.STRING },
  accountNumber:{ type: Sequelize.STRING },
  aliasName:{ type: Sequelize.STRING },
  accountType:{ type: Sequelize.INTEGER },
  appUserId:{ type: Sequelize.INTEGER },
});

const CardDetailsModel = sequelizer.define('card_details', {
  accountId:{type: Sequelize.INTEGER},
  key:{ type: Sequelize.STRING },
  value:{ type: Sequelize.STRING },
})

//AppUserModel.hasMany(sequelizer.models.accounts);
//AccountsModel.hasMany(sequelizer.models.card_details);
//CodeValuesModel.hasMany(sequelizer.models.code);
//CodeValuesModel.belongsTo(CodeModel, {foreignKey: 'fk_codeId'});
//CardDetailsModel.hasMany(sequelizer.models.code_values);
sequelizer.sync();

const AppUser     = sequelizer.models.app_user;
const Accounts    = sequelizer.models.accounts;
const CardDetails = sequelizer.models.card_details;
const Code        = sequelizer.models.code;
const CodeValues  = sequelizer.models.code_values;
export { Code, CodeValues, AppUser, Accounts, CardDetails };