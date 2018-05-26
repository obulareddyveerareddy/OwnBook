import fetch from 'cross-fetch';
import apolloClientRef  from './../apolloClientInit';
import gql from "graphql-tag";

export async function getAllCodeValuesByCodeIdList(codeIds){
    console.log('4) MetaDataApis <::> REQ_CODEVALUES_BYCODEIds ~~~ ', codeIds);
    let response = await apolloClientRef.query({
        query: gql`
        query getAllCodeValuesByCodeIdList($codeIds:[Int]){
            getAllCodeValuesByCodeIdList(codeIds:$codeIds){
                codeId
                name
                description
                codeValueId
            }
        }
        `,
        variables: {codeIds}
    });
    
    return response;
}
