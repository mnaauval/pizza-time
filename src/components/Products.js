import React from "react";
import styled from "styled-components";

function Products({ heading, menu }) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {menu.map((product) => {
          return (
            <ProductsCard>
              <ProductsImage src={product.img} alt={product.alt} />
              <ProductsInfo>
                <ProductsTitle>{product.name}</ProductsTitle>
                <ProductsDescription>{product.desc}</ProductsDescription>
                <ProductsPrice>{product.price}</ProductsPrice>
                <ProductsButton>Add to cart</ProductsButton>
              </ProductsInfo>
            </ProductsCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  background: #150f0f;
  color: white;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const ProductsCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

const ProductsImage = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;

const ProductsTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

const ProductsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const ProductsDescription = styled.p`
  margin-bottom: 1rem;
`;

const ProductsPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ProductsButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: white;
  transition: 0.2s ease-out;

  &:hover {
    background: #fdc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
