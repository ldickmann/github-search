import React from "react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";

const Container = styled.div`
  max-width: 503px;
  width: 100%;
  margin: 1rem auto;
  padding: 0 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 62px;
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #fff;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  padding: 18px 16px;
  border: none;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const SearchButton = styled.button`
  width: 62px;
  height: 100%;
  background: #005cff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;

  svg {
    color: #fff;
    width: 24px;
    height: 24px;
  }
`;

const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = "Digite um usuário do Github",
}) => {
  return (
    <Container>
      <InputWrapper>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <SearchButton onClick={onSearch}>
          <FiSearch />
        </SearchButton>
      </InputWrapper>
    </Container>
  );
};

export default SearchInput;
