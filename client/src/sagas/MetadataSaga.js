import {take, put, call, apply} from 'redux-saga/effects';
import * as metaDataApis from './../apis/MetaDataApis';

export function* getAllCodeValuesByCodeIdList(){
    try{
        const { codeIds } = yield take('REQ_CODEVALUES_BYCODEIds');
        console.log('3) MetadataSaga <::> getAllCodeValuesByCodeIdList ~~~ ', codeIds);
        /** */
        let codeValues =  yield call(metaDataApis.getAllCodeValuesByCodeIdList, codeIds);
        
        console.log('4) MetadataSaga <::> REQ_CODEVALUES_BYCODEIds ~~~ ', codeValues);
        yield put({type: 'RESP_CODEVALUES_BYCODEIds', payload:codeValues});
    }catch(error){
        yield put({type: 'ERROR_CODEVALUES_BYCODEIds', error});
    }
}