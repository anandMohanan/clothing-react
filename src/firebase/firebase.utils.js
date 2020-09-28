import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyCkTB4fKFlBV7Wn02BrXru2NpMBecYjb9o",
 authDomain: "clothing-react-88539.firebaseapp.com",
 databaseURL: "https://clothing-react-88539.firebaseio.com",
 projectId: "clothing-react-88539",
 storageBucket: "clothing-react-88539.appspot.com",
 messagingSenderId: "163315314292",
 appId: "1:163315314292:web:d2fc0b62a002c9065d2b21",
 measurementId: "G-JFNELT8PQV"
}

export const createUserProfileDocument = async (userAuth,additionalData) => {
       if(!userAuth) return;

       const userRef = firestore.doc(`users/${userAuth.uid}`)

       const snapShot = await userRef.get();
       
       if(!snapShot.exists){
              const { displayName , email } = userAuth;
              const createdAt = new Date();

              try{
                     await userRef.set({
                            displayName,
                            email,
                            createdAt,
                            ...additionalData
                     })
              }
              catch(error){
                     console.log(error);
              }
       }

       return userRef;
       
}

export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {
       const collectionRef = firestore.collection(collectionKey);
       const batch = firestore.batch()
       objectsToAdd.forEach(obj => {
              const newDocRef = collectionRef.doc()
              batch.set(newDocRef , obj)
       });
       return await batch.commit()

}

export const convertCollectionsToMap = collections => {
       const transformedCollection = collections.docs.map(doc => {
         const { title, items } = doc.data();
     
         return {
           routeName: encodeURI(title.toLowerCase()),
           id: doc.id,
           title,
           items
         };
       });
     
       return transformedCollection.reduce((accumulator, collection) => {
         accumulator[collection.title.toLowerCase()] = collection;
         return accumulator;
       }, {});
     };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;