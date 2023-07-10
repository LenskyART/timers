import React, {useEffect, useRef} from 'react';
import {Timer} from './components/Timer'
import {CountdownImport} from "./components/CountdownInput";
import styled from "styled-components";
import {FlexSC} from "./assets/styles/FlexSC";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: aquamarine;
  
`

function App() {
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current++
    })

    return (
        <AppWrapper>
            <FlexSC justify='space-around'>
                <Timer></Timer>
                <CountdownImport></CountdownImport>
            </FlexSC>
        </AppWrapper>
    );
}

export default App;
