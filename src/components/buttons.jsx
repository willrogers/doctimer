import React from "react"
import { timeString } from "../model"
import classes from "./buttons.module.css"

export const Timer = props => {
  function clicked() {
    if (props.callback) {
      props.callback(props.name)
    }
  }
  const { running, segment } = props
  let child = <div>Start Clinic</div>
  let text = ""
  if (running) {
    if (segment !== null) {
      const time = timeString(segment.currentDuration())
      text = `${segment.category}: ${time}`
    } else {
      text = "No appointment in progress"
    }
    child = (
      <>
        <div>{text}</div>
        <div className={classes.subhead}>Press to stop clinic</div>
      </>
    )
  }
  return (
    <button
      onClick={clicked}
      type="button"
      className={`${classes.button} ${classes.timer}`}
    >
      {child}
    </button>
  )
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
      {`${props.selected ? "Stop" : "Start"} ${text}`}
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

export const Buttons = props => {
  return (
    <div className={classes.buttons}>
      <Timer
        callback={props.startPressed}
        selected={props.started}
        running={props.started}
        segment={props.currentSegment}
      />
      {props.buttonsSelected.map(deets => (
        <TimerButton
          key={deets[0]}
          name={deets[0]}
          selected={deets[1]}
          callback={props.itemPressed}
          disabled={!props.started}
        ></TimerButton>
      ))}
      <SwitchButton
        toControls={false}
        setControlsView={props.setControlsView}
      />
    </div>
  )
}
