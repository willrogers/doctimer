// Categories

export const APPT = "Appointment"
export const NOTES = "Notes"
export const VISIT = "Home Visit"
export const MEETING = "Meeting"
export const CHECKS = "Checks"
export const IN_BETWEEN = "In between"
export const CATEGORIES = [APPT, NOTES, VISIT, MEETING, CHECKS]

function zeroPad(num, places) {
  return String(num).padStart(places, "0")
}

export function timeString(millis) {
  const secs = millis / 1000
  const minutes = zeroPad(Math.floor(secs / 60), 2)
  const seconds = zeroPad(Math.round(secs % 60), 2)
  return `${minutes}:${seconds}`
}

export function fullTimeString(date) {
  return date.toLocaleTimeString()
}

export function fullDateString(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }
  return date.toLocaleDateString(undefined, options)
}

export class Segment {
  constructor(category) {
    this.category = category
    this.comment = null
    this.startMillis = Date.now()
    this.endDuration = null
  }
  setComment(comment) {
    this.comment = comment
  }
  stop() {
    this.endDuration = Date.now() - this.startMillis
    console.log(`stopped segment ${this.endDuration}`)
  }
  startTime() {
    return new Date(this.startMillis)
  }
  endTime() {
    if (this.endDuration) {
      return new Date(this.startMillis + this.endDuration)
    } else {
      return new Date()
    }
  }
  currentDuration() {
    if (this.endDuration !== null) {
      return this.endDuration
    } else {
      return Date.now() - this.startMillis
    }
  }
}

export class Day {
  constructor() {
    this.date = new Date()
    this.segments = []
  }

  addSegment(segment) {
    this.segments.push(segment)
    console.log(`${this.segments.length} segments`)
  }
}
