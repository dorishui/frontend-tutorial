import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// // Import and init Sentry SDK
// import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://2f4e649d19e64637903b24e784c7a4f2@o4505201972871168.ingest.sentry.io/4505523376553985",
//   integrations: [new Sentry.BrowserTracing({}), new Sentry.Replay()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   tracesSampleRate: 1.0,

//   // Capture Replay for 10% of all sessions,
//   // plus for 100% of sessions with an error
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://fb7ac88deeed9e1807e7677b88bb1f46@o4509253693734912.ingest.us.sentry.io/4509261621362688",
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  // ${<Include name="code-comments/javascript/trace-sample-rate" />}
});


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);