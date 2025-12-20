// import React, { useState } from "react";
// import "./Splash.css";
// import { Redirect } from "react-router-dom";

// function AnimatedSplash(props) {
//   return (
//     <div className="logo_wrapper">
//       <div className="loading">
//         <div class="ball"></div>
//         <div class="ball"></div>
//         <div class="ball"></div>
//         <div class="ball"></div>
//         <div class="ball"></div>
//         <div class="ball"></div>
//         <div class="ball"></div>
//       </div>
//     </div>
//   );
// }

// function Splash(props) {
//   const [redirect, setRedirect] = useState(false);
//   setTimeout(() => setRedirect(true), 2000);

//   return redirect ? (
//     <Redirect to="/home" />
//   ) : (
//     <AnimatedSplash theme={props.theme} />
//   );
// }

// export default Splash;

import React, { useState, useEffect } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);

  // Increased time slightly to enjoy the animation
  useEffect(() => {
    const timer = setTimeout(() => setRedirect(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
