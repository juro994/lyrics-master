import React from 'react';
import styled from 'styled-components';

interface IProps {
  lyrics: string;
}

const LyricsStyled = styled.div`
  text-align: left;
`

const Lyrics: React.FunctionComponent<IProps> = ({lyrics}) => {
  return ( <div>
    {lyrics && 
    <LyricsStyled>
      <pre>
        {lyrics}
      </pre>
    </LyricsStyled>}
    </div>
  );
}

export default Lyrics;
