import {all} from 'redux-saga/effects';
import book from './saga'

export default function* rootSaga(){
     yield all([
        book  ,
    ])
}
