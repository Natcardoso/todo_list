import styled, { keyframes } from "styled-components";

type PropsArea = {
    activeList: boolean;
};

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #0e0f10;
`;

export const Area = styled.div<PropsArea>`
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({ activeList }) =>
        activeList ? "flex-start" : "center"};
    padding: 3rem 0;
    background: #181a1b;
    border-radius: 10px;

    h1 {
        margin-bottom: 1rem;
    }

    p {
        color: #9b9386;
        text-transform: capitalize;
    }
`;

const line = keyframes`
    0% {
        border: none;
        width: 40%;
    }
    100%{
        width: 80%;
    }
`;

export const Header = styled.div<PropsArea>`
    width: 100%;
    border-bottom: ${({ activeList }) =>
        activeList ? "1px solid #9b9386" : ""};
    margin: ${({ activeList }) => (activeList ? "1rem 0" : "0.5rem 0 5rem")};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s linear ease;
    animation: ${line} 0.8s alternate ease;
`;

export const ContainerAreaTask = styled.div<PropsArea>`
    width: 90%;
    height: 500px;
    overflow: auto;
    margin-top: 2rem;
    display: ${({ activeList }) => (activeList ? "block" : "none")};
`;
