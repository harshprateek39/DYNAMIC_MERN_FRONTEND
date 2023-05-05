import React from 'react';
import styled from 'styled-components';

const PricingCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  
  padding: 20px;
  /* From https://css.glass */
background: rgba(96, 93, 93, 0.33);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(96, 93, 93, 0.3);
  text-align: center;
`;

const Plan = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.h4`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #2ecc71;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
`;

function PricingCard(props) {
  return (
    <PricingCardContainer>
      <Plan>{props.plan}</Plan>
      <Price>₹ {props.price}</Price>
      <FeatureList>
      <FeatureItem>{props.feature1}</FeatureItem>
        <FeatureItem><img className='priceImg' src={props.img}/></FeatureItem>  
      </FeatureList>
      <Button>BUY NOW</Button>
    </PricingCardContainer>
  );
}

export default PricingCard;