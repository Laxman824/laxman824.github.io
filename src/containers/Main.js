// import React from "react";
// import { Route, Switch, HashRouter } from "react-router-dom";
// import Home from "../pages/home/HomeComponent";
// import Splash from "../pages/splash/Splash";
// import Education from "../pages/education/EducationComponent";
// import Experience from "../pages/experience/Experience";
// import Contact from "../pages/contact/ContactComponent";
// import Projects from "../pages/projects/Projects";
// import GithubPage from "../pages/github/GithubPage";
// import PortfolioChatBot from "../components/chatbot/ChatBot";
// import { settings } from "../portfolio.js";

// export default function Main(propss) {
//   if (settings.isSplash) {
//     return (
//       <div>
//         <HashRouter basename="/">
//           <Switch>
//             <Route
//               path="/"
//               exact
//               render={(props) => (
//                 <Splash
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/home"
//               render={(props) => (
//                 <Home
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/experience"
//               exact
//               render={(props) => (
//                 <Experience
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/education"
//               render={(props) => (
//                 <Education
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/contact"
//               render={(props) => (
//                 <Contact
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/splash"
//               render={(props) => (
//                 <Splash
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/projects"
//               render={(props) => (
//                 <Projects
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/github"
//               render={(props) => (
//                 <GithubPage
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//           </Switch>
//           <PortfolioChatBot theme={propss.theme} />
//         </HashRouter>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <HashRouter basename="/">
//           <Switch>
//             <Route
//               path="/"
//               exact
//               render={(props) => (
//                 <Home
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/home"
//               render={(props) => (
//                 <Home
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/experience"
//               exact
//               render={(props) => (
//                 <Experience
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/education"
//               render={(props) => (
//                 <Education
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/contact"
//               render={(props) => (
//                 <Contact
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/projects"
//               render={(props) => (
//                 <Projects
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//             <Route
//               path="/github"
//               render={(props) => (
//                 <GithubPage
//                   {...props}
//                   theme={propss.theme}
//                   setTheme={propss.setTheme}
//                 />
//               )}
//             />
//           </Switch>
//           <PortfolioChatBot theme={propss.theme} />
//         </HashRouter>
//       </div>
//     );
//   }
// }
// src/containers/Main.js - UPDATED AND CORRECTED
// src/containers/Main.js - FINAL OPTIMIZED VERSION

import React, { lazy, Suspense } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { settings } from "../portfolio.js";

// --- STEP 1: Lazily import ALL page components and the chatbot ---
const Splash = lazy(() => import("../pages/splash/Splash"));
const Home = lazy(() => import("../pages/home/HomeComponent"));
const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const GithubPage = lazy(() => import("../pages/github/GithubPage"));
const PortfolioChatBot = lazy(() => import("../components/chatbot/ChatBot"));

export default function Main(propss) {
  // A simple loading fallback to show while pages are being downloaded.
  // You can replace this with a fancy spinner component if you have one.
  const loadingFallback = <div style={{ height: "100vh", width: "100vw" }} />;

  const routes = (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <Home {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />
      <Route
        path="/home"
        render={(props) => (
          <Home {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />
      <Route
        path="/experience"
        exact
        render={(props) => (
          <Experience
            {...props}
            theme={propss.theme}
            setTheme={propss.setTheme}
          />
        )}
      />
      <Route
        path="/education"
        render={(props) => (
          <Education
            {...props}
            theme={propss.theme}
            setTheme={propss.setTheme}
          />
        )}
      />
      <Route
        path="/contact"
        render={(props) => (
          <Contact {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />
      <Route
        path="/projects"
        render={(props) => (
          <Projects
            {...props}
            theme={propss.theme}
            setTheme={propss.setTheme}
          />
        )}
      />
      <Route
        path="/github"
        render={(props) => (
          <GithubPage
            {...props}
            theme={propss.theme}
            setTheme={propss.setTheme}
          />
        )}
      />
    </Switch>
  );

  if (settings.isSplash) {
    // Override the first route for the splash screen
    const splashRoutes = (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Splash
              {...props}
              theme={propss.theme}
              setTheme={propss.setTheme}
            />
          )}
        />
        {/* The rest of the routes are the same */}
        {routes.props.children}
      </Switch>
    );

    return (
      <div>
        <HashRouter basename="/">
          {/* --- STEP 2: Wrap the entire app logic in ONE Suspense component --- */}
          <Suspense fallback={loadingFallback}>
            {splashRoutes}
            <PortfolioChatBot theme={propss.theme} />
          </Suspense>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Suspense fallback={loadingFallback}>
            {routes}
            <PortfolioChatBot theme={propss.theme} />
          </Suspense>
        </HashRouter>
      </div>
    );
  }
}
