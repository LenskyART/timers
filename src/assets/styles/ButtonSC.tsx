import React from 'react';
import styled from "styled-components";

const ButtonStyled = styled.button<Props>`
  border-radius: 4px;
  background-color: ${props => props.bc || 'red'};
  border: ${props => props.border || 'none'};
  width: ${props => props.width || '80px'};
  height: ${props => props.height || '30px'};
  margin: ${props => props.margin || '10px'};
`

interface Props {
    bc?: string | false;
    border?: string | false;
    width?: string | false;
    height?: string | false;
    margin?: string | false;
    onClick?: () => any;
    children?: any;
}

export const ButtonSC = (props: Props) => {
    return (
        <ButtonStyled {...props}/>
    );
};

