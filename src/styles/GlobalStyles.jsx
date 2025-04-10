/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: ${theme.fonts.main};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.textPrimary};
      }
    `}
  />
);

export default GlobalStyles;
