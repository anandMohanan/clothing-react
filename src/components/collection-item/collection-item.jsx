import React from 'react';
import { connect } from 'react-redux';

/*import './styles.scss';*/
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './styles';

const CollectionItem = ({item,addItem})   =>
{
    const { name,price,imageUrl } = item;
return (
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton className='custom-button' onClick={() => addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});



export default connect(null,mapDispatchToProps)(CollectionItem);  