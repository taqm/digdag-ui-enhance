/* eslint-disable */
export type ResumeFrom = Resume & {
  from: string
}

export type Config = {
  empty: boolean
  factory: ConfigFactory
  keys: string[]
}

export type RestSession = {
  project: IdAndName
  id: Id
  sessionUuid: string
  sessionTime: OffsetDateTime
  workflow: NameOptionalId
  lastAttempt: Attempt
}

export type RestSchedule = {
  project: IdAndName
  id: Id
  disabledAt: number
  nextScheduleTime: OffsetDateTime
  nextRunTime: number
  workflow: IdAndName
}

export type RestProject = {
  name: string
  id: Id
  revision: string
  archiveType: string
  archiveMd5: string[]
  createdAt: number
  deletedAt: number
  updatedAt: number
}

export type RestLogFileHandle = {
  fileSize: number
  agentId: string
  direct: RestDirectDownloadHandle
  fileName: string
  taskName: string
  fileTime: number
}

export type IdAndName = {
  name: string
  id: Id
}

export type ZoneOffset = {
  totalSeconds: number
  id: string
  rules: ZoneRules
}

export type RestProjectCollection = {
  projects: RestProject[]
}

export type RestVersionCheckResult = {
  apiCompatible: boolean
  serverVersion: string
  upgradeRecommended: boolean
}

export type RestWorkflowDefinitionCollection = {
  workflows: RestWorkflowDefinition[]
}

export type Attempt = {
  id: Id
  createdAt: number
  retryAttemptName: string
  params: Config
  finishedAt: number
  success: boolean
  done: boolean
  cancelRequested: boolean
  status: 'success' | 'error' | 'killed' | 'running'
}

export type RestLogFilePutResult = {
  fileName: string
}

export type RestWorkflowDefinition = {
  project: IdAndName
  name: string
  id: Id
  config: Config
  revision: string
  timezone: ZoneId
}

export type RestWorkflowSessionTime = {
  project: IdAndName
  revision: string
  sessionTime: OffsetDateTime
  timezone: ZoneId
}

export type RestScheduleBackfillRequest = {
  fromTime: number
  attemptName: string
  dryRun: boolean
  count: number
}

export type ZoneOffsetTransition = {
  offsetBefore: ZoneOffset
  offsetAfter: ZoneOffset
  overlap: boolean
  instant: number
  duration: Duration
  gap: boolean
  dateTimeBefore: string
  dateTimeAfter: string
}

export type RestRevision = {
  userInfo: Config
  revision: string
  archiveType: string
  archiveMd5: string[]
  createdAt: number
}

export type RestSessionCollection = {
  sessions: RestSession[]
}

export type RestTaskCollection = {
  tasks: RestTask[]
}

export type ZoneOffsetTransitionRule = {
  month: 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER'
  timeDefinition: 'UTC' | 'WALL' | 'STANDARD'
  standardOffset: ZoneOffset
  offsetBefore: ZoneOffset
  offsetAfter: ZoneOffset
  dayOfMonthIndicator: number
  localTime: LocalTime
  midnightEndOfDay: boolean
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
}

export type LocalTime = {
  hour: number
  minute: number
  second: number
  nano: number
}

export type ZoneId = {
  rules: ZoneRules
  id: string
}

export type RestTask = {
  group: boolean
  id: Id
  state: string
  startedAt: number
  fullName: string
  parentId: Id
  upstreams: Id[]
  retryAt: number
  config: Config
  exportParams: Config
  storeParams: Config
  stateParams: Config
  error: Config
  updatedAt: number
  cancelRequested: boolean
}

export type TemporalUnit = {
  duration: Duration
  durationEstimated: boolean
  dateBased: boolean
  timeBased: boolean
}

export type RestScheduleSummary = {
  id: Id
  disabledAt: number
  nextScheduleTime: OffsetDateTime
  nextRunTime: number
  createdAt: number
  updatedAt: number
  workflow: IdAndName
}

export type RestScheduleSkipRequest = {
  nextRunTime: number
  fromTime: number
  dryRun: boolean
  nextTime: LocalTimeOrInstant
  count: number
}

export type Duration = {
  seconds: number
  nano: number
  zero: boolean
  negative: boolean
  units: TemporalUnit[]
}

export type NameOptionalId = {
  name: string
  id: Id
}

export type RestRevisionCollection = {
  revisions: RestRevision[]
}

export type RestSessionAttempt = {
  project: IdAndName
  id: Id
  createdAt: number
  sessionUuid: string
  retryAttemptName: string
  params: Config
  sessionId: Id
  finishedAt: number
  sessionTime: OffsetDateTime
  workflow: NameOptionalId
  success: boolean
  done: boolean
  cancelRequested: boolean
  index: number
  status: 'success' | 'error' | 'killed' | 'running'
}

export type OffsetDateTime = {
  offset: ZoneOffset
  nano: number
  hour: number
  minute: number
  dayOfYear: number
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
  month: 'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER'
  dayOfMonth: number
  year: number
  second: number
  monthValue: number
}

export type RestScheduleCollection = {
  schedules: RestSchedule[]
}

export type ZoneRules = {
  fixedOffset: boolean
  transitions: ZoneOffsetTransition[]
  transitionRules: ZoneOffsetTransitionRule[]
}

export type RestSessionAttemptCollection = {
  attempts: RestSessionAttempt[]
}

export type RestLogFileHandleCollection = {
  files: RestLogFileHandle[]
}

export type ResumeFailed = Resume & {
}

export type RestSessionAttemptRequest = {
  retryAttemptName: string
  params: Config
  sessionTime: number
  workflowId: Id
  resume: Resume
}

export type Resume = {
  attemptId: Id
  mode: 'FROM' | 'FAILED'
}
