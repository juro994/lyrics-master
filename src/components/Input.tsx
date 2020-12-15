import React from 'react';
import styled from 'styled-components';


interface IProps {
    setReleaseName: (releaseName: string) => void;
    startedTyping: boolean;
}

const InputStyled = styled.input<any>`
    background-color: rgba(255, 255, 255, 0.8);
    color: ${props => props.theme.main};
    width: 300px;
    max-width: 80%;
    padding: 15px;
    border: 2px solid white;
    border-radius: 20px;
    font-size: 1.2em;
    transition: background-color .35s ease, width .50s ease, margin .35s ease;
    margin-top: ${props => props.startedTyping ? "0px" : "20%"};
    margin-bottom: ${props => props.startedTyping ? "0px" : "20%"};
    width: ${props => props.startedTyping ? "800px" : "40%"};

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }

    &:focus {
        background-color: rgba(255, 255, 255, 1);
        outline: none;
        color: ${props => props.theme.main};
    }
`

const Input: React.FunctionComponent<IProps> = ({setReleaseName, startedTyping}) => {
    
    return (
        <InputStyled placeholder='Search for a song...' onChange={(e:any) => setReleaseName(e.target.value)} startedTyping={startedTyping}/>
    );
}

export default Input;
