import React from "react"
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
    <div>
      <p>Stats for {props.day.date.toLocaleDateString()}:</p>
      <p>There have been {props.day.segments.length} completed segments.</p>
      {props.day.segments.map(segment => (
        <SegmentSummary segment={segment} />
      ))}
      <SwitchButton
        toControls={true}
        setControlsView={props.setControlsView}
      ></SwitchButton>
    </div>
  )
}
