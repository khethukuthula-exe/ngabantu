import styled from "styled-components";

export const StyledContainer = styled.div<{$business?: boolean}>`
  position: fixed;
  bottom: 16px; /* Distance from the bottom of the screen */
  right: 16px;  /* Distance from the right side of the screen */

  .primary {
    background-color: #bdee63;
    color: #000;
    border: 1px solid #fff;
  }

  .business {
    bottom: 200px; /* Distance from the bottom of the screen */
    right: 200px;  /* Distance from the right side of the screen */
  }
`