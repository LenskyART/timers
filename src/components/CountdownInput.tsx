import React, {memo, useCallback, useEffect, useState} from "react";
import {ButtonSC} from "../assets/styles/ButtonSC";
import {InputSc} from "../assets/styles/InputSC";
import {FlexSC} from "../assets/styles/FlexSC";

export const CountdownImport = memo(() => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [result, setResult] = useState(0)
    const [countStart, setCountStart] = useState(false)

    const audio = new Audio('/assets/audio/F.mp3').muted
    console.log(audio)

    useEffect(() => {
        setResult(seconds + minutes * 60)
    }, [seconds, minutes])

    useEffect(() => {
        if (!result) {
            setCountStart(false)
            setSeconds(0)
            setMinutes(0)
            // audio.play()
        }
        if (!countStart || result === 0) return
        const i = setInterval(() => {
            setResult(r => r - 1)
        }, 1000)
        return () => clearInterval(i)
    }, [result, countStart])

    const toggleCount = useCallback(() => setCountStart(e => !e), [])

    const stopCount = useCallback(() => {
        setCountStart(false)
        setSeconds(0)
        setMinutes(0)
    }, [])

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
    }

    const handelSeconds = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        if (minutes === 720) return
        let seconds = +event.target.value
        if (seconds < 0) seconds = 0
        if (seconds > 60) seconds = 60
        setSeconds(seconds)
    }, [minutes])

    const handelMinutes = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
        let minutes = +event.target.value
        if (minutes < 0) minutes = 0
        if (minutes + seconds / 60 > 720) minutes = 720
        if (minutes === 720) setSeconds(0)
        setMinutes(minutes)
    }, [seconds])

    return (
        <form onSubmit={handleSubmit}>
            <h2>Таймер обратного отчета</h2>

            <FlexSC>
                <div>
                    <InputSc type="number" onChange={handelMinutes}
                             value={Number(minutes).toString()}
                             margin='0 5px 0 0'/>
                    <InputSc type="number" onChange={handelSeconds}
                             value={Number(seconds).toString()} />
                </div>


                <InputSc type="range" min='0' max='60' step='15' width='180px'
                         value={Number(seconds).toString()} onChange={handelSeconds}/>
            </FlexSC>

            <progress max={minutes*60+seconds} value={result}></progress>

            <br/>

            <ButtonSC margin='0' bc={!countStart ? 'green' : 'orange'}
                      onClick={toggleCount}>{countStart ? 'пауза' : 'запуск'}</ButtonSC>
            <ButtonSC onClick={stopCount}>сброс</ButtonSC>


            <div>
                <h1>{Math.floor(result / 60).toString().padStart(2, '0')}
                    :
                    {(result % 60).toString().padStart(2, '0')}</h1>
            </div>

        </form>
    )
})