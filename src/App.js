import React from "react";
import SurveyComponent from "./SurveyComponent";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <SurveyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
