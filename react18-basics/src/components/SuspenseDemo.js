import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import Layout  from "./Layout"
import Spinner  from "./Spinner"
import FetchComments  from "./FetchComments"
import FetchTasks  from './FetchTasks'
import FetchUsers  from './FetchUsers'

const SuspenseDemo = () => {
  return (
    <Layout>
      <p className="mb-3 text-xl font-bold text-blue-500">SuspenseDemo</p>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Spinner />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Spinner />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}

export default SuspenseDemo