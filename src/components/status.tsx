import React from "react"
import { fullDateString } from "../model"
import classes from "./status.module.css"

interface StatusProps {
  time: Date
  events: number
}

export const Status = (props: StatusProps): JSX.Element => {
  return (
    <div id="status" className={classes.status}>
      <div className={classes.date}>{fullDateString(props.time)}</div>
      <div className={classes.events}>{props.events} events so far.</div>
    </div>
  )
}
