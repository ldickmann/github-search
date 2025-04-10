import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
  padding: 0 1rem;
`;

const Input = styled.input`
  width: 503px;
  height: 62px;
  padding: 18px 16px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1rem;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

const SearchInput = ({
  value,
  onChange,
  placeholder = "Digite um usuário do Github",
}) => {
  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default SearchInput;
