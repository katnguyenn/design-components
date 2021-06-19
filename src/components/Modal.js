import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { typeScale } from "../utils";
import signupImage from "../assets/signup.svg";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div `
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background-color: ${props => props.theme.forElementBackground};
    color: ${props => props.theme.textOnForElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`;

const SignUpHeader = styled.div`
    font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;

`;



export const SignUpModal = ({ showModal, setShowModal }) => {
    const animation = useSpring({
        opacity: showModal ? 0 : 1,
        transform: showModal ? `translateY(0)` : `translateY(-200)`
    });
    return (
        <animated.div style={animation}>
        <ModalWrapper>
            <img src={signupImage} alt="Sign up for an account" aria-hidden="true" />
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpText>Sign up today to get access</SignUpText>
            <PrimaryButton>Sign up!</PrimaryButton>
        </ModalWrapper>
        </animated.div>
    )
}