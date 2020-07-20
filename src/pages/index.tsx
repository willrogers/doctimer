import React, { useState } from "react"

import { ControlsView } from "../components/controls"
import { StatsView } from "../components/stats"
import { Day, CATEGORIES, Segment } from "../model"

const DoctimerPage = (): JSX.Element => {
  const [day, setDay] = useState<Day>(new Day())
  const [controlsView, setControlsView] = useState<boolean>(true)
  const [currentSegment, setCurrentSegment] = useState<Segment>(null)
  const [started, setStarted] = useState<boolean>(null)

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
    return (
      <StatsView
        currentSegment={currentSegment}
        day={day}
        setControlsView={setControlsView}
      />
    )
  }
}

export default DoctimerPage
