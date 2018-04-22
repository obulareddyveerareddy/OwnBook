import {createStore, applyMiddleware}   from 'redux';
import rootReducers                     from './AppReducers';
import createSagaMiddleware             from 'redux-saga';
import {initSagas}                      from './initSagas';

export default function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleware()
    const store          = createStore(
        rootReducers,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    initSagas(sagaMiddleware);
    return store;
}