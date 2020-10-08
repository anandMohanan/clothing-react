import { all , call } from 'redux-saga/effects';

import { shopSagas } from './shop/saga';
import {userSagas} from './user/saga';
import {cartSagas} from './cart/saga';

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}