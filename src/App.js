import "./App.css";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Left from "./components/sidebars/left/Left";
import Right from "./components/sidebars/right/Right";
import Create from "./pages/Create";

const App = () => {
  const location = useLocation();

  return (
    <body className="body">
      <main>
        <section>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch
              className="switch"
              location={location}
              key={location.pathname}
            >
              <div className="content">
                <NormalRoute path="/explore" component={Home} />
                <NormalRoute path="/create" component={Create} />
                <NormalRoute path="/" exact>
                  <Redirect to="/explore" />
                </NormalRoute>
              </div>
            </Switch>
          </AnimatePresence>
        </section>
      </main>
    </body>
  );
};

export const NormalRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        <div className="home">
          <Left /> {/* HEADER ALWAYS VISIBLE */}
          <Component {...props} />
          <Right />
        </div>
      )}
    />
  );
};

export const NavlessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        <div>
          <Component {...props} />
        </div>
      )}
    />
  );
};
export default App;
