import React from 'react';
import Input from './Input';
import styled from 'styled-components';

interface IProps {
    setReleaseName: (event: string) => void;
    startedTyping: boolean;
}

const InputAreaStyled = styled.div`
    margin-bottom: 30px;
    margin-top: 30px;
`

const InputArea: React.FunctionComponent<IProps> = ({setReleaseName, startedTyping}) => {
    return (
        <InputAreaStyled>
            <Input setReleaseName={setReleaseName} startedTyping={startedTyping}/>
        </InputAreaStyled>
    );
}

export default InputArea;
