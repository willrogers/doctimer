import React, { useState } from "react"

import { ControlsView } from "../components/controls"
import { StatsView } from "../components/stats"
import { Day, CATEGORIES } from "../model"

const DoctimerPage = () => {
  const [day, setDay] = useState(new Day())
  const [controlsView, setControlsView] = useState(true)
  const [currentSegment, setCurrentSegment] = useState(null)
  const [started, setStarted] = useState(null)

  if (controlsView) {
    return (
      <ControlsView
        setControlsView={setControlsView}
        day={day}
        categories={CATEGORIES}
        currentSegment={currentSegment}
        setCurrentSegment={setCurrentSegment}
        started={started}
        setStarted={setStarted}
      />
    )
  } else {
    return <StatsView day={day} setControlsView={setControlsView} />
  }
}

export default DoctimerPage
