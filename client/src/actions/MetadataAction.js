import * as MetadataActionTypes from './MetadataActionTypes';

export function getAllCodeValuesByCodeIdList(codeIds){
    console.log('2) MetadataAction <::> getAllCodeValuesByCodeIdList ~~~ ', codeIds);
    return { type: MetadataActionTypes.REQ_CODEVALUES_BYCODEIds, codeIds};
}