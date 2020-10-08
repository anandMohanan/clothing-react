import { takeLatest , call , put , all} from 'redux-saga/effects';
import { firestore , convertCollectionsToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess , fetchCollectionsFailure } from './actions';

import ShopActionTypes from './types';

export function* fetchCollectionsAsync(){
    try 
    {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsToMap , snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
        
    
        //collectionRef.get().then(snapshot =>{
          //  const collectionsMap = convertCollectionsToMap(snapshot);
                // updateCollections(collectionsMap);
              //  dispatch(fetchCollectionsSuccess(collectionsMap));
    //}).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}