import styled from "styled-components";
import CustomButton from "../CustomButton/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: sticky;
  width: 291px;
  height: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  left: calc(50px + 50vw);
  z-index: 4000;

  @media (max-width: 768px) {
    top: 80px;
    left: 50px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  width: 70%;
  font-family: "Roboto", sans-serif;
`;

export const EmptyMessageContainer = styled.span`
  color: black !important;
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const CartCloseButton = styled.p`
  cursor: pointer;
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 12px;
  color: black;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
