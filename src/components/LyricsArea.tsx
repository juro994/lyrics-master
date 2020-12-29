import React from 'react';
import Lyrics from './Lyrics';
import styled from 'styled-components';

interface IProps {
    lyrics: string;
    setLyrics: (lyrics: string) => void;
}

const CloseButtonStyled = styled.p`
    cursor: pointer;
`

const LyricsAreaStyled = styled.div<any>`
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    transition: width .50s ease;
    width: ${props => props.lyricsPresent ? "70%" : "0%"};
    display: ${props => props.lyricsPresent ? "flex" : "none"};
    align-items: center;
    flex-direction: column;
    flex-grow: 2;
`

const LyricsArea: React.FunctionComponent<IProps> = ({ lyrics, setLyrics }) => {
    return (
        <LyricsAreaStyled lyricsPresent={lyrics.length > 0}>
            <CloseButtonStyled onClick={(e) => setLyrics('')}>&times;</CloseButtonStyled>
            <Lyrics lyrics={lyrics}></Lyrics>
        </LyricsAreaStyled>
    );
}

export default LyricsArea;
