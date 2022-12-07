import styled, { keyframes } from "styled-components";

type PropsTask = {
    checked: boolean;
};

const animationTask = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Task = styled.div<PropsTask>`
    display: flex;
    padding: 0.8rem 1rem;
    position: relative;
    border-bottom: 1px solid #9b9386;
    animation: ${animationTask} 3s alternate ease;

    label {
        display: flex;
        align-items: center;
        text-decoration: ${({ checked }) =>
            checked ? "line-through" : "initial"};
        margin-left: 0.5rem;
        width: 90%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;

        span:nth-child(1) {
            padding: 0.5rem;
            border-radius: 8px;
            width: 100%;
            display: flex;
            align-items: center;
        }
    }

    input {
        display: none;
    }

    .checkmark {
        position: absolute;
        left: 0;
        height: 20px;
        width: 20px;
        background: #fff;
        border-radius: 4px;
        padding: 0.1rem;
        cursor: pointer;
        border: 2px solid #fff;
    }

    .container:hover input,
    input:checked ~ .checkmark {
        background-color: #3c1691;
    }

    .container .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: 0;
        width: 4px;
        height: 8px;
        border: solid #fff;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }

    .iconRemove {
        margin-left: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;

        :hover {
            transform: scale(1.2);

            svg {
                fill: #3c1691;
            }
        }
    }
`;
