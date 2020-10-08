import  ShopActionTypes  from './types';
import {firestore , convertCollectionsToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())
        //    fetch('https://firestore.googleapis.com/v1/projects/clothing-react-88539/databases/(default)/documents/collections')
        //    .then(response => response.json())
    
        collectionRef.get().then(snapshot =>{
            const collectionsMap = convertCollectionsToMap(snapshot);
                //updateCollections(collectionsMap);
                dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}}