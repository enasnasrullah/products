import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { IRoute, routes } from "./routes/index";

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route>
          {routes.map((route: IRoute, index: number) => {
            return <Route {...route} key={index} />;
          })}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
