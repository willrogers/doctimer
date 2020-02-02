// Categories

export const APPT = "Appointment"
export const NOTES = "Notes"
export const VISIT = "Home Visit"
export const MEETING = "Meeting"
export const CHECKS = "Checks"
export const IN_BETWEEN = "In between"
export const CATEGORIES = [APPT, NOTES, VISIT, MEETING, CHECKS]

export class Segment {
  constructor(category) {
    this.category = category
    this.comment = null
    this.startTime = new Date()
    this.duration = null
  }
  setComment(comment) {
    this.comment = comment
  }
  stop() {
    this.duration = new Date() - this.startTime
  }
}

export class Day {
  constructor() {
    this.date = new Date()
    this.segments = []
  }

  addSegment(segment) {
    this.segments.push(segment)
  }
}
