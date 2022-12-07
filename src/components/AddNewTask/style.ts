import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: relative;
`;

const animationButton = keyframes`
    0% {
        top: 0;
    }
`;

export const Button = styled.button`
    border-radius: 50px;
    width: 50px;
    height: 50px;
    background: #3c1691;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease;

    &#buttonConfirm {
        position: absolute;
        top: -0.5rem;
        right: 4rem;
        animation: ${animationButton} 0.5s alternate ease;
        background: transparent;
    }

    &.styleButtonActiveList {
        position: absolute;
        top: -2.5rem;
        right: 1rem;
        transition: all 0.4s ease;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :hover {
        transform: scale(1.1);
    }
`;

const AnimationInput = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 80%;
    }
`;

export const ContainerInput = styled.div`
    align-items: center;
    display: flex;
    border: 1px solid #3c1691;
    border-radius: 20px;
    font-size: 14px;
    width: 80%;
    justify-content: space-between;
    animation: ${AnimationInput} 0.5s linear ease;
`;

export const Input = styled.input`
    background-color: transparent;
    caret-color: #9b9386;
    border: none;
    width: 92%;
    padding: 0.5rem 1rem;

    ::-webkit-input-placeholder {
        color: #9b9386;
        padding-left: 0.4rem;
    }
`;
