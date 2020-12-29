import React from 'react';
import Release from './Release';
import styled from 'styled-components';
import IRelease from '../services/interfaces';

interface IProps {
    releases: IRelease[];
    setSelectedRelease: (release: IRelease) => void;
    lyricsPresent: boolean;
}

interface IStyleProps {
    lyricsPresent: boolean;
}

const ReleaseAreaStyled = styled.div<IStyleProps>`
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    transition: width .50s ease;
    width: ${props => props.lyricsPresent ? "30%" : "100%"};
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
`

const ReleaseArea: React.FunctionComponent<IProps> = ({ releases, setSelectedRelease, lyricsPresent}) => {

    return (
        <ReleaseAreaStyled lyricsPresent={lyricsPresent}>
            {releases.map(function (release, idx) {
                return (<Release key={idx} release={release} setSelectedRelease={setSelectedRelease}/>)
            })}
        </ReleaseAreaStyled>
    );
}

export default ReleaseArea;
