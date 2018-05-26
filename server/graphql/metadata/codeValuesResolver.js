import { db, Code, CodeValues } from './../../orm/connectors';
import { GraphQLScalarType } from 'graphql';
import Sequelize from 'sequelize';

const codeValuesResolver = {
  Query: {
    getCodeValueByCodeId:(_, args)=>{
        /*
        return CodeValues.find({
            include:[
                        {
                            model:Code, where:{codeId:CodeValues.codeId}
                        }
                    ], where: args});
        
        return new Promise((resolve, reject)=>{
            db.query('select * from code c, code_values cv where cv.codeId = c.codeId and cv.codeId='+args.codeId
                            ,{ type: sequelize.QueryTypes.SELECT }).then((response)=>{
                                resolve(response);
                            })
        });
        */
        
        return CodeValues.findAll({include:Code, where:args});
    },
    getAllCodeValuesByCodeIdList:(_, args)=>{
        const Op = Sequelize.Op;
        return CodeValues.findAll({ where:{codeId:{[Op.in]:args.codeIds}}});
    },
    getAllCodeValues:()=>{
        return new Promise((resolve, reject)=>{
            CodeValues.findAll().then((response)=>{
               resolve(response); 
            });
        });
    }
  },
  Mutation:{
    addCodeValue:(_, args, context) =>{
        return CodeValues.build(args).save();
    },
    updateCodeValue:(_, args) =>{
        let codeValueId = args.codeValueId;
        delete args.codeValueId;
        return new Promise((resolve, reject)=>{
            CodeValues.update({args, where:{codeValueId:codeValueId}}).then((result)=>{
                resolve(true);
            })
        })
    },
    deleteCodeValueById:(_, args) =>{
        return new Promise((resolve, reject)=>{
            CodeValues.destroy({where:{codeValueId:args.codeValueId}}).then((result)=>{
                resolve(true);
            })
        })
    }
  }
};

export default codeValuesResolver;