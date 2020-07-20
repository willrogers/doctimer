import React from "react"
import classes from "./stats.module.css"
import { SwitchButton } from "./buttons"
import { fullTimeString, timeString, Segment, CATEGORIES } from "../model"

export const SegmentSummary = (props: { segment: Segment }): JSX.Element => {
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

export const CategorySummary = (props: {
  category: string
  segments: Segment[]
}): JSX.Element => {
  const { category, segments } = props
  let maxLength = undefined
  let minLength = undefined
  let totalLength = 0
  segments.forEach((segment: Segment): void => {
    if (maxLength !== undefined) {
      if (segment.endDuration > maxLength) {
        maxLength = segment.endDuration
      }
    } else {
      maxLength = segment.endDuration
    }
    if (minLength !== undefined) {
      if (segment.endDuration < minLength) {
        minLength = segment.endDuration
      }
    } else {
      minLength = segment.endDuration
    }
    totalLength += segment.endDuration
  })
  return (
    <div className={classes.category}>
      <h3>
        {category}: {segments.length} segment{segments.length === 1 ? "" : "s"}.
      </h3>
      <p>Shortest {timeString(minLength)}</p>
      <p>Longest {timeString(maxLength)}</p>
      <p>Average length {timeString(totalLength / segments.length)}</p>
    </div>
  )
}

export const StatsView = props => {
  const categorySegments = {}
  props.day.segments.forEach((segment: Segment) => {
    if (!categorySegments[segment.category]) {
      categorySegments[segment.category] = [segment]
    } else {
      categorySegments[segment.category].push(segment)
    }
  })
  const catParts = Object.keys(categorySegments).map((category: string) => (
    <CategorySummary
      key={category}
      category={category}
      segments={categorySegments[category]}
    />
  ))

  const oneSegment = props.day.segments.length === 1

  return (
    <div className={classes.statsView}>
      <h3>Stats for {props.day.date.toLocaleDateString()}:</h3>
      <p>
        There {oneSegment ? "has" : "have"} been {props.day.segments.length}{" "}
        completed segment{oneSegment ? "" : "s"}.
      </p>
      {props.currentSegment && (
        <p>
          <strong>{props.currentSegment.category}</strong> currently in
          progress.
        </p>
      )}
      {catParts}
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <SwitchButton
          toControls={true}
          setControlsView={props.setControlsView}
        ></SwitchButton>
      </div>
    </div>
  )
}
