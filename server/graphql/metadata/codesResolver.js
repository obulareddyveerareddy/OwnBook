import { Codes } from './../../orm/connectors';
const codesResolver = {
  Query: {
    codes: (_, args) => {
      return Codes.find({ where: args });
    },
    getAllCodes: () => {
      return Codes.findAll();
    }
  },
  Mutation:{
      addCodes:(_, args) =>{
        return Codes.build(args).save();
      },
      updateCodes:(_, args) =>{
        let updateSet = {};
        if(args.name){
          updateSet.name = args.name
        }
        if(args.description){
          updateSet.description = args.description
        }
        return Codes.update(updateSet, { where: { id: args.id }});
      },
      deleteCodes:(_, args) =>{
        return Codes.destroy({ where: { id: args.id }});
      },
      truncateCodes:()=>{
        return Codes.destroy({truncate:true});
      }
  }
};

export default codesResolver;