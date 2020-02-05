import React from "react"
import classes from "./stats.module.css"
import { SwitchButton } from "./buttons"
import { fullTimeString, timeString } from "../model"

export const SegmentSummary = props => {
  const { segment } = props
  console.log(segment.endTime())
  return (
    <div>
      {segment.category} start {fullTimeString(segment.startTime())} end{" "}
      {fullTimeString(segment.endTime())} duration{" "}
      {timeString(segment.currentDuration())}
    </div>
  )
}
export const StatsView = props => {
  return (
    <div className={classes.statsView}>
      <p>Stats for {props.day.date.toLocaleDateString()}:</p>
      <p>There have been {props.day.segments.length} completed segments.</p>
      {props.day.segments.map(segment => (
        <SegmentSummary segment={segment} />
      ))}
      <div className={classes.statsContainer}>
        <div className={classes.statsColumn}></div>
        <div className={classes.statsColumn}></div>
      </div>
      <SwitchButton
        toControls={true}
        setControlsView={props.setControlsView}
      ></SwitchButton>
    </div>
  )
}
