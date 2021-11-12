import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as effectFunction from 'redux-saga/effects';
import allRedux from '@/redux';

const allReducer: any = {};
const allSaga: any = {};

for (const key in allRedux) {
  const reduxItem = allRedux[key];
  allReducer[key] = reduxItem.reducer;
  allSaga[key] = reduxItem.saga;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers(allReducer),
  {},
  applyMiddleware(sagaMiddleware)
)

const sagaGenerator = () => function* sagaInner() {
  for (const key in allSaga) {
    const sagaItem = allSaga[key];
    for (const name in sagaItem.every) {
      yield effectFunction.takeEvery(`${key}/${name}`, sagaItem.every[name], effectFunction);
    }
    for (const name in sagaItem.latest) {
      yield effectFunction.takeLatest(`${key}/${name}`, sagaItem.latest[name], effectFunction);
    }
  }
}
sagaMiddleware.run(sagaGenerator());


export default store;