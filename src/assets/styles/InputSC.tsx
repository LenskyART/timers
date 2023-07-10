import React from 'react';
import styled from "styled-components";

const InputStyled = styled.input<Props>`
  border-radius: 4px;
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '15px'};
  margin: ${props => props.margin || '5px'};
  border: ${props => props.border || 'none'};
`

interface Props {
    width?: string;
    height?: string;
    margin?: string;
    border?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    value?: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    children?: any[];
}

export const InputSc = (props: Props) => {
    return (
        <InputStyled {...props}/>
    );
};

