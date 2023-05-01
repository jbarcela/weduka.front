import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  width: 100%;
  gap: 20px
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Initial = styled.div`
  width: 40px;
  height: 40px;
  background-color: cornflowerblue;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const NameAndContact = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

export const Contact = styled.span`
  font-size: 12px;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 48px;
  height: 48px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  align-self: flex-start;
`;
