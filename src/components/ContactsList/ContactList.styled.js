import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #c0bfbf;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactsBtn = styled.button`
  cursor: pointer;
  border: none;
  border: 1px solid #757473;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 10px;
  color: inherit;

  &:hover {
    border-color: #7be8ea;
  }
`;
