import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./routes/index";

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route>
          {routes.map((route: any, index: number) => {
            return <Route {...route} key={index} />;
          })}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
