import React, { useState } from "react"
import "./controls.css"
import {
  StartButton,
  Timer,
  TimerButton,
  SwitchButton,
} from "../components/buttons"
export const ControlsView = props => {
  const [selected, setSelected] = useState(null)
  const [started, setStarted] = useState(null)
  const [current, setCurrent] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [id, setId] = useState(null)
  function startPressed() {
    setStarted(!started)
    if (started) {
      setSelected(null)
      clearInterval(id)
      setId(null)
      setCurrent(null)
      setStartTime(null)
    }
  }
  function itemPressed(name) {
    if (selected === name) {
      setSelected(null)
      clearInterval(id)
      setId(null)
    } else {
      setSelected(name)
      const now = new Date()
      setStartTime(now)
      setId(
        setInterval(function() {
          const now = new Date()
          setCurrent(now)
        }, 1000)
      )
    }
  }
  let duration = null
  if (startTime !== null && current !== null) {
    duration = current - startTime
  }
  const buttonsSelected = props.categories.map(name => [
    name,
    name === selected,
  ])
  return (
    <div id="buttonScreen">
      <Timer text={selected} time={duration} running={started} />
      {buttonsSelected.map(deets => (
        <TimerButton
          key={deets[0]}
          name={deets[0]}
          selected={deets[1]}
          callback={itemPressed}
          disabled={!started}
        ></TimerButton>
      ))}
      <StartButton callback={startPressed} selected={started}></StartButton>
      <SwitchButton
        toControls={false}
        setControlsView={props.setControlsView}
      />
    </div>
  )
}
