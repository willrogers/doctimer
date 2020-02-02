import React from "react"

function zeroPad(num, places) {
  return String(num).padStart(places, "0")
}

function timeString(millis) {
  const secs = millis / 1000
  const minutes = zeroPad(Math.floor(secs / 60), 2)
  const seconds = zeroPad(Math.round(secs % 60), 2)
  console.log(`result ${minutes}:${seconds}`)
  return `${minutes}:${seconds}`
}

export const Timer = props => {
  const time = timeString(props.time)
  let child = <div>Press 'Start' to begin</div>
  if (props.running) {
    if (props.text) {
      child = (
        <>
          <div style={{ width: "50%" }}>{props.text}</div>
          <div style={{ width: "50%" }}> {time} </div>
        </>
      )
    } else {
      child = <div>Press a category to start</div>
    }
  }
  return <div id="timer">{child}</div>
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
      id="startButton"
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
  return <button onClick={doSwitch}>{text}</button>
}
