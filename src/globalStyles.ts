import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        outline: none;
        color: #e2e2e2;

        ::-webkit-scrollbar {
            width: 12px;               
        }

        ::-webkit-scrollbar-track {
            background: #0e0f10;       
        }

        ::-webkit-scrollbar-thumb {
            background-color: #3c1691;    
            border-radius: 20px;
            border: 3px solid  #0e0f10;    
        }
    }
`;
