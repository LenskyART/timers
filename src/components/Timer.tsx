import React, {useEffect, useState, memo, useCallback} from "react";
import {ButtonSC} from "../assets/styles/ButtonSC";


export const Timer = memo(() => {
    const [timeGo, setTimeGo] = useState(false)
    const [sec, setSec] = useState(0)

    const minuteString = String(Math.floor(sec / 60)).padStart(2, '0')
    const secondString = String(sec % 60).padStart(2, '0')

    const toggleTimer = useCallback(() => setTimeGo(e => !e), [])

    const stopTimer = useCallback(() => {
        setTimeGo(false)
        setSec(0)
    }, [])

    useEffect(() => {
        if (!timeGo) return
        const i = setInterval(() => {
            setSec(sec + 1)
        }, 1000)
        return () => clearInterval(i)
    }, [sec, timeGo])


    return (
        <div>
            <h2>Таймер</h2>
            <h1>
                {minuteString}:{secondString}
            </h1>

            <ButtonSC margin='0' bc={!timeGo ? 'green' : 'orange'}
                      onClick={toggleTimer}>{timeGo ? 'пауза' : 'запуск'}</ButtonSC>
            <ButtonSC onClick={stopTimer}>сброс</ButtonSC>
        </div>
    )
})

