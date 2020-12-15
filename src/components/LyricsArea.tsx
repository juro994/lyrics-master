import React from 'react';
import Lyrics from './Lyrics';
import styled from 'styled-components';

interface IProps {
    lyrics: string;
}

const LyricsAreaStyled = styled.div<any>`
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    transition: width .50s ease;
    width: ${props => props.lyricsPresent ? "70%" : "0%"};
    display: flex;
    align-items: center;
    flex-direction: column;
`

const LyricsArea: React.FunctionComponent<IProps> = ({ lyrics }) => {
    return (
        <LyricsAreaStyled lyricsPresent={lyrics.length > 0}>
            <Lyrics lyrics={lyrics}></Lyrics>
        </LyricsAreaStyled>
    );
}

export default LyricsArea;
