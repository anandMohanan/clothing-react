import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/selectors';

import './styles.scss';

import CollectionItem from '../../components/collection-item/collection-item';


const CollectionPage = ({ collection }) => {
    const { title , items } = collection;
    return(
    <div className="collection-page">
        <h2 className='title' >{title}</h2>
        <div className="items">
            {
                items.map(item => <
                    CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
);
}

const mapStateTOProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateTOProps)(CollectionPage);