import  ShopActionTypes  from './types';

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})