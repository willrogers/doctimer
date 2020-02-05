export const APPT = "Appointment"
export const NOTES = "Notes"
export const VISIT = "Home Visit"
export const MEETING = "Meeting"
export const CHECKS = "Checks"
export const IN_BETWEEN = "In between"
export const CATEGORIES = [APPT, NOTES, VISIT, MEETING, CHECKS]

function zeroPad(num: number, places: number): string {
  return String(num).padStart(places, "0")
}

export function timeString(millis: number): string {
  const secs = millis / 1000
  const minutes = zeroPad(Math.floor(secs / 60), 2)
  const seconds = zeroPad(Math.round(secs % 60), 2)
  return `${minutes}:${seconds}`
}

export function fullTimeString(date: Date): string {
  return date.toLocaleTimeString()
}

export function fullDateString(date: Date): string {
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
  public category: string
  public comment: string
  public startMillis: number
  public endDuration: number
  constructor(category: string) {
    this.category = category
    this.comment = null
    this.startMillis = Date.now()
    this.endDuration = null
  }
  setComment(comment: string): void {
    this.comment = comment
  }
  stop(): void {
    this.endDuration = Date.now() - this.startMillis
    console.log(`stopped segment ${this.endDuration}`)
  }
  startTime(): Date {
    return new Date(this.startMillis)
  }
  endTime(): Date {
    if (this.endDuration) {
      return new Date(this.startMillis + this.endDuration)
    } else {
      return new Date()
    }
  }
  currentDuration(): number {
    if (this.endDuration !== null) {
      return this.endDuration
    } else {
      return Date.now() - this.startMillis
    }
  }
}

export class Day {
  public date: Date
  public segments: Segment[]
  constructor() {
    this.date = new Date()
    this.segments = []
  }

  addSegment(segment: Segment): void {
    this.segments.push(segment)
    console.log(`${this.segments.length} segments`)
  }
}
