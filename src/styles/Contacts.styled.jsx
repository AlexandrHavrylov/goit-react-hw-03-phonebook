import styled from "@emotion/styled";

export const ContactsList = styled.ul`
  margin: 0;
  padding: 24px;
  list-style: none;
`;

export const Contact = styled.li`
  position: relative;
  padding: 10px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 24px;
  font-weight: 500;
  border: 1px gray solid;
  border-radius: 10px;
  box-shadow: rgb(25 26 27 / 20%) 1px 1px 1px 1px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactInfo = styled.span`
  margin-right: 56px;

  svg {
    position: absolute;
    top: 15px;
    left: 5px;
    color: #010174;
  }
`;

export const DeleteBtn = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;

  text-align: center;
  border-radius: 5px;
  border: 0.5px black solid;
  &:hover {
    background-color: tomato;
  }
`;
