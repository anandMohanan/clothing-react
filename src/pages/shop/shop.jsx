import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import withSpinner from '../../components/with-spinner/with-spinner';

import { updateCollections } from '../../redux/shop/actions';

import { firestore , convertCollectionsToMap} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component  {
    state = {loading: true};

    unSubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');

    //    fetch('https://firestore.googleapis.com/v1/projects/clothing-react-88539/databases/(default)/documents/collections')
    //    .then(response => response.json())

    collectionRef.get().then(snapshot =>{
        const collectionsMap = convertCollectionsToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
    } )
    }
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
            <Route  path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
        )
    }
}
 
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
      dispatch(updateCollections(collectionsMap))
  });


export default connect(null,mapDispatchToProps)(ShopPage);