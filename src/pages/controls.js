import React, { useState } from "react"
import { StartButton, Timer, TimerButton } from "../components/buttons"
import "./controls.css"

const ControlsPage = () => {
  const [selected, setSelected] = useState(null)
  const [started, setStarted] = useState(null)
  const [current, setCurrent] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [id, setId] = useState(null)
  console.log(`start time ${startTime}`)
  function start() {
    if (!started) {
      const now = new Date()
      setStartTime(now)
      setId(
        setInterval(function() {
          const now = new Date()
          setCurrent(now)
        }, 1000)
      )
    } else {
      clearInterval(id)
      setId(null)
    }
    setStarted(!started)
  }
  function callback(name) {
    if (selected === name) {
      setSelected(null)
    } else {
      setSelected(name)
    }
  }
  const duration = current - startTime
  console.log(`duration ${duration}`)
  const buttons = ["appt", "notes", "home visit", "meeting", "checks"]
  const buttonsSelected = buttons.map(name => [name, name === selected])
  return (
    <div id="buttonScreen">
      <Timer text={selected} time={duration} />
      {buttonsSelected.map(deets => (
        <TimerButton
          key={deets[0]}
          name={deets[0]}
          selected={deets[1]}
          callback={callback}
          disabled={!started}
        ></TimerButton>
      ))}
      <StartButton callback={start} selected={started}></StartButton>
    </div>
  )
}

export default ControlsPage
