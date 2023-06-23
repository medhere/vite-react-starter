import { useEffect, Suspense } from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export default function Loadables({ children }) {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => {
          return (
            <div className="text-center mx-auto mt-[20vh]">
              <p>Something went wrong:</p>
              <pre>{error.message}</pre>
              <button className="btn" onClick={resetErrorBoundary}>
                Try again
              </button>
            </div>
          );
        }}
        onReset={() => {
          console.log("app reset");
        }}
      >
        <Suspense fallback={<>ProgressBar</>}>
          {/* <ScrollToTop /> */}
          {/* <ScrollRestoration /> */}
          {children}
        </Suspense>
      </ErrorBoundary>
    </>
  );
}


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
