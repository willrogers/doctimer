import React, { useState } from "react"
import "./controls.css"
import {
  StartButton,
  Timer,
  TimerButton,
  SwitchButton,
} from "../components/buttons"
import { fullDateString, Segment } from "../model"
import { useEffect } from "react"
export const ControlsView = props => {
  const { currentSegment, setCurrentSegment, started, setStarted } = props
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  function startPressed() {
    setStarted(!started)
    if (started && currentSegment) {
      currentSegment.stop()
      props.day.addSegment(currentSegment)
    }
  }
  function itemPressed(category) {
    if (currentSegment === null) {
      // Start segment
      const newSegment = new Segment(category)
      setCurrentSegment(newSegment)
    } else if (currentSegment.category === category) {
      // Stop segment
      currentSegment.stop()
      props.day.addSegment(currentSegment)
      setCurrentSegment(null)
    } else {
      currentSegment.stop()
      props.day.addSegment(currentSegment)
      const newSegment = new Segment(category)
      setCurrentSegment(newSegment)
    }
  }
  const buttonsSelected = props.categories.map(category => [
    category,
    currentSegment && category === currentSegment.category,
  ])
  return (
    <div id="buttonScreen">
      <div id="topdate">
        <p>{fullDateString(time)}</p>
        <p>{props.day.segments.length} events so far.</p>
      </div>
      <Timer running={started} segment={currentSegment} />
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
