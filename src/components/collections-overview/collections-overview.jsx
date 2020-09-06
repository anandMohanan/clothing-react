import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles.scss';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from '../../redux/shop/selectors';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({id,...OtherSectionProps})  =>   (
                <CollectionPreview  key={id} {...OtherSectionProps}/>   
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})



export default connect(mapStateToProps)(CollectionsOverview);