import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";
import { Location, Action, RouteObjectArrayAlias } from "@sentry/react/types/types";

Sentry.init({
  dsn: "https://ec4e51e7a075cf003b2c084084d4bc24@o4507232457719808.ingest.de.sentry.io/4507232460800080",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation: function (): Location {
        throw new Error("Function not implemented.");
      },
      useNavigationType: function (): Action {
        throw new Error("Function not implemented.");
      },
      createRoutesFromChildren: function (children: JSX.Element[]) {
        throw new Error("Function not implemented.");
      },
      matchRoutes: function (routes: RouteObjectArrayAlias, location: Location, basename?: string): any[] | null {
        throw new Error("Function not implemented.");
      }
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
