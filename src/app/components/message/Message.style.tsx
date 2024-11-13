import styled from "styled-components";

export const StyledContainer = styled.div`
    max-width: 60%;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 18px;
  font-size: 16px;
  line-height: 1.4;
  word-wrap: break-word;
`

export const Incoming = styled.div`
  background-color: #f1f0f0;
  color: #333;
  align-self: flex-start; /* Aligns message to the left */
  border-top-left-radius: 0;
`

export const Outgoing = styled.div`
   background-color: #1c86f5;
  color: white;
  align-self: flex-end; /* Aligns message to the right */
  border-top-right-radius: 0;
`
