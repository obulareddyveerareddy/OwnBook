import * as MetadataActionTypes from './../actions/MetadataActionTypes';

export default function emitMetadataObject(state = [], action){
    switch(action.type){
        case MetadataActionTypes.RESP_CODEVALUES_BYCODEIds:
            console.log('~~~~~~~~ >>> 1) MetadataReducer RESP_CODEVALUES_BYCODEIds >>> ',action.payload);
            let response = [...action.payload.data.getAllCodeValuesByCodeIdList];
            console.log('~~~~~~~~ >>> 2) MetadataReducer RESP_CODEVALUES_BYCODEIds >>> ',response);
            return response;
        default:
            return state;
    }
}