import styled from "@emotion/styled";

export const StyledForm = styled.form`
  width: 600px;
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px black solid;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(25 26 27 / 20%) 4px 4px 8px 0px;
`;

export const Label = styled.label`
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 300px;
  padding: 4px;
  margin-top: 5px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
  border: 0.5px black solid;
  &:hover {
    background-color: #8ecafc;
  }
`;
