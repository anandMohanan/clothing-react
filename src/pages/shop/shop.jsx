import React from 'react';

import SHOP_DATA from './data'; 
import CollectionPreview from '../../components/preview-collection/collection-preview';           

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state  =   {
            collections:SHOP_DATA
        }

    }
    render(){
        const{collections}=this.state;
        return (
        <div className='shop-page'>{
            collections.map(({id,...OtherSectionProps})  =>   (
                <CollectionPreview  key={id} {...OtherSectionProps}/>   
            ))
        }</div>
        ) 
    }
}    

export default ShopPage;