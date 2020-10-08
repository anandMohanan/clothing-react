import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
        font-size: 18px;
      }
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
    width: 100%;
    height: 100%;
    }
`
export const NameAndPrice = styled.span`
    width: 23%;

    @media screen and (max-width: 800px) {
        width: 22%;
      }
`

export const Quantity = styled.span`
    width: 23%;
    display: flex;
    padding-left: 20px;
`

export const Arrow = styled.div`
    cursor: pointer;
`

export const Value = styled.span`
    margin: 0px 10px;
    margin-top: 3px;
`


export const Removebutton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`


