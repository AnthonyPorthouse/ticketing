import Bugsnag from "@bugsnag/js";
import BugsnagPluginExpress from '@bugsnag/plugin-express'

const API_KEY = process.env?.BUGSNAG_API_KEY || ''
const RELEASE_STAGE = process.env?.BUGSNAG_RELEASE_STAGE || 'production'

Bugsnag.start({
  apiKey: API_KEY,
  releaseStage: RELEASE_STAGE,
  plugins: [BugsnagPluginExpress]
})

export const bugsnag = Bugsnag.getPlugin('express')!
