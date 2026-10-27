import styled from "styled-components";

export const FormBox = styled.form`
    width: 90%;
    height: 130px;
    margin: 0 auto;
    outline: 1px solid white;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const InputBox = styled.input`
    padding: 20px 400px;
    border: none;
`;

export const Btn = styled.button`
    padding: 8px 70px;
    background-color: green;
    border: none;
    border-radius: 5px;

    display: flex;
    justify-content: start;
    margin-top: 10px;
`;