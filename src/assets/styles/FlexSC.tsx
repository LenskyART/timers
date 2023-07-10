import React, {ReactChildren, ReactComponentElement} from 'react';
import styled from "styled-components";

const FlexStyled = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
  
`
interface Props {
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string
    children?: any[];
}

export const FlexSC = (props: Props) => {
    return (
        <FlexStyled {...props}/>
    );
};

