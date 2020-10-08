import React from 'react';

import './styles.scss';
import CollectionItem from '../collection-item/collection-item';

import { CollectionPreviewContainer , TitleContainer , PreviewContainer } from './styles';

const CollectionPreview = ({title,items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items.filter((item,idx)=> idx<4 ).map(item=>
                (
                    <CollectionItem key={item.id} item={item}/>
                )
            )}
        </PreviewContainer>   
    </CollectionPreviewContainer>
);

export default CollectionPreview;  