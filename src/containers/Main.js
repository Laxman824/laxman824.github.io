import React, { lazy, Suspense, useState } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { settings } from "../portfolio.js";

// Lazy imports for all pages
const Splash = lazy(() => import("../pages/splash/Splash"));
const Home = lazy(() => import("../pages/home/HomeComponent"));
const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const GithubPage = lazy(() => import("../pages/github/GithubPage"));
const PortfolioChatBot = lazy(() => import("../components/chatbot/ChatBot"));

// Admin & User Pages
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const UserSpace = lazy(() => import("../pages/userspace/UserSpace")); // 👈 ADD THIS

export default function Main(propss) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Loading fallback
  const loadingFallback = (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: propss.theme?.body || "#0a0a0a",
        color: propss.theme?.text || "#ffffff",
        fontSize: "18px",
      }}
    ></div>
  );

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  // All routes
  const routes = (
    <Switch>
      {/* 👇 USER SPACE ROUTE - Add this */}
      <Route
        path="/myspace"
        render={(props) => (
          <UserSpace
            {...props}
            theme={propss.theme}
            setTheme={propss.setTheme}
          />
        )}
      />

      {/* Admin Route */}
      <Route
        path="/admin"
        render={(props) => (
          <AdminDashboard
            {...props}
            theme={propss.theme}
            setTheme={propss.setTheme}
          />
        )}
      />

      {/* Home Routes */}
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

      {/* Other Routes */}
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

  // With Splash screen
  if (settings.isSplash) {
    const splashRoutes = (
      <Switch>
        {/* 👇 USER SPACE ROUTE - Add here too */}
        <Route
          path="/myspace"
          render={(props) => (
            <UserSpace
              {...props}
              theme={propss.theme}
              setTheme={propss.setTheme}
            />
          )}
        />

        {/* Admin Route */}
        <Route
          path="/admin"
          render={(props) => (
            <AdminDashboard
              {...props}
              theme={propss.theme}
              setTheme={propss.setTheme}
            />
          )}
        />

        {/* Splash as home */}
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

        {/* Rest of routes */}
        {routes.props.children}
      </Switch>
    );

    return (
      <div>
        <HashRouter basename="/">
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
