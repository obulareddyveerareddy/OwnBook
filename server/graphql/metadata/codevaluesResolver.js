import { Codevalues, Codes } from './../../orm/connectors';
const codevaluesResolver = {
  Query: {
    codevalues: (_, args) => {
      return Codevalues.find({ where: args, include : [Codes] });
    },
    getAllCodevalues: () => {
      return Codevalues.findAll({include : [Codes] });
    }
  },
  Mutation:{
      addCodevalues:(_, args) =>{
        return Codevalues.build(args).save();
      },
      updateCodevalues:(_, args) =>{
        let updateSet = {};
        if(args.name){
          updateSet.name = args.name
        }
        if(args.description){
          updateSet.description = args.description
        }
        if(args.codeId){
            updateSet.codeId = args.codeId
        }
        return Codevalues.update(updateSet, { where: { id: args.id }});
      },
      deleteCodevalues:(_, args) =>{
        return Codevalues.destroy({ where: { id: args.id }});
      },
      truncateCodevalues:()=>{
        return Codevalues.destroy({truncate:true});
      }
  }
};

export default codevaluesResolver;