import React, { useState } from "react"
import "./controls.css"
import { Buttons } from "../components/buttons"
import { Status } from "./status"
import { Segment } from "../model"
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
      <Status time={time} events={props.day.segments.length} />
      <Buttons
        buttonsSelected={buttonsSelected}
        itemPressed={itemPressed}
        started={started}
        startPressed={startPressed}
        currentSegment={currentSegment}
        setControlsView={props.setControlsView}
      />
    </div>
  )
}
