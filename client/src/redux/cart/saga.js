import {takeLatest , put , all ,call} from 'redux-saga/effects';
import { clearCart } from './actions';
import userActionTypes from '../user/types';

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSucces(){
    yield takeLatest(userActionTypes.SIGNOUT_SUCCESS,clearCartOnSignOut);
}

export function* cartSagas(){
    yield(all([call(onSignOutSucces)]))
}