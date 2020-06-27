import React from "react"
import { timeString } from "../model"
import classes from "./buttons.module.css"

export const Timer = props => {
  const { running, segment } = props
  let child = <div>Press 'Start' to begin</div>
  if (running) {
    if (segment !== null) {
      const time = timeString(segment.currentDuration())
      child = (
        <>
          <div style={{ width: "50%" }}>{segment.category}</div>
          <div style={{ width: "50%" }}> {time} </div>
        </>
      )
    } else {
      child = <div>Select a category</div>
    }
  }
  return <div className={`${classes.button} ${classes.timer}`}>{child}</div>
}

export const StartButton = props => {
  function clicked() {
    if (props.callback) {
      props.callback(props.name)
    }
  }
  const bgcolor = props.selected ? "red" : "green"
  const text = props.selected ? "Stop" : "Start"
  return (
    <button
      className={classes.button}
      style={{ backgroundColor: bgcolor }}
      type="button"
      onClick={clicked}
    >
      {text}
    </button>
  )
}

export const TimerButton = props => {
  function clicked() {
    if (props.callback) {
      props.callback(props.name)
    }
  }
  const bgcolor = props.selected && !props.disabled ? "red" : "gray"
  const text =
    props.altname !== undefined && props.selected ? props.altname : props.name
  return (
    <button
      className={classes.button}
      disabled={props.disabled}
      style={{ backgroundColor: bgcolor }}
      type="button"
      onClick={clicked}
    >
      {text}
    </button>
  )
}

export const SwitchButton = props => {
  let text = ""
  if (props.toControls) {
    text = "Back to controls"
  } else {
    text = "See stats"
  }
  function doSwitch() {
    if (props.toControls) {
      props.setControlsView(true)
    } else {
      props.setControlsView(false)
    }
  }
  return (
    <button
      className={`${classes.button} ${classes.switch}`}
      onClick={doSwitch}
    >
      {text}
    </button>
  )
}
