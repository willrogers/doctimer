import React, { useState } from "react"

import { ControlsView } from "../components/controls"
import { StatsView } from "../components/stats"
import { Day, CATEGORIES } from "../model"

const DoctimerPage = () => {
  const day = new Day()
  const [controlsView, setControlsView] = useState(true)

  function addSegment(segment) {
    day.addSegment(segment)
  }

  if (controlsView) {
    return (
      <ControlsView
        setControlsView={setControlsView}
        addSegment={addSegment}
        categories={CATEGORIES}
      />
    )
  } else {
    return <StatsView day={day} setControlsView={setControlsView} />
  }
}

export default DoctimerPage
