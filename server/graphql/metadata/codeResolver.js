import { Code } from './../../orm/connectors';
import { GraphQLScalarType } from 'graphql';

const codeResolver = {
  Query: {
    getCodeById: (_, args) => {
      return Code.find({where: args});
    },
    getAllCodes:()=>{
      return new Promise((resolve, reject)=>{
          Code.findAll().then((response)=>{
             resolve(response); 
          });
      });
    }
  },
  Mutation:{
    addCode:(_, args, context) =>{
        console.log('~~~~~~~~~~~~~~~ >>> addCode:(...) <<< ~~~~~~~~~~~~~~~');
        console.log(args);
        return Code.build(args).save();
    },
    updateCode:(_, args, context) =>{
      let id = args.id;
      delete args.id;
      return new Promise((resolve, reject)=>{
          Code.update(args, { where: { id: id } }).then((response)=>{
             resolve(true);
          });
      });
    },
    deleteCode:(_, args, context) =>{
      return new Promise((resolve, reject)=>{
          Code.destroy({ where: { id: args.id } }).then((response)=>{
             resolve(true);
          });
      });
    },
    deleteByCodeId:(_, args) => {
      return new Promise((resolve, reject)=>{
          Code.destroy({ where: { codeId: args.id } }).then((response)=>{
             resolve(true);
          });
      }); 
    }
  }
};

export default codeResolver;