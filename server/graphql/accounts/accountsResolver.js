import { AppUser, Accounts, CardDetails } from './../../orm/connectors';
import { GraphQLScalarType } from 'graphql';
import * as _ from 'lodash';

const accountsResolver = {
  Query: {
    getAllAccountsByAppUserId: (_, args, context) => {
        return new Promise((resolve, reject)=>{
            AppUser.find({where: {googleRefId:context.session.profile.id}}).then((appUserResp) => {
                Accounts.findAll({where: {appUserId:appUserResp.id}}).then((accounts)=>{
                    resolve(accounts);
                });
            });
        });
      //return Accounts.find({where: args});
    },
    getAllAccounts:()=>{
        return new Promise((resolve, reject)=>{
            Accounts.findAll().then((response)=>{
               resolve(response); 
            });
        });
        //return Accounts.findAll();
    }
  },
  Mutation:{
    addAccount:(_, args, context) =>{
        console.log('~~~~~~~~~~~~~~~ >>> addAccount:(...) <<< ~~~~~~~~~~~~~~~');
        console.log(args);
        return new Promise((resolve, reject)=>{
            AppUser.find({where: {googleRefId:context.session.profile.id}}).then((response) => {
                args.appUserId = response.id;
                Accounts.build(args).save().then((response)=>{
                    let index = 0;
                    console.log('index ---- '+ index+' args.cardDetails.length ---- '+args.cardDetails.length);
                    args.cardDetails.map((item)=>{
                        console.log('args.cardDetails item ---- ', item);
                        item.accountId = response.id;
                        CardDetails.build(item).save().then((cardDetailsResponse)=>{
                            index ++;
                            console.log('CardDetails.build(.).save ---- '+ index);
                            if(index === args.cardDetails.length){
                                resolve(response);
                            }
                        });
                    });
                    
                });
            });
        });
        //return Accounts.build(args).save();
    }
  }
};

export default accountsResolver;