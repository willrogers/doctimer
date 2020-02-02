import React from "react"
import { SwitchButton } from "./buttons"
export const StatsView = props => {
  return (
    <div>
      This is the stats view
      <SwitchButton
        toControls={true}
        setControlsView={props.setControlsView}
      ></SwitchButton>
    </div>
  )
}
