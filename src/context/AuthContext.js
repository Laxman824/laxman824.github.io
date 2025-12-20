// import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged
// } from "firebase/auth";
// import { auth, googleProvider } from "../firebase/config";

// // Create context with default values
// const AuthContext = createContext(null);

// // Custom hook to use auth - NOW WITH SAFE FALLBACK
// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   // 👇 CHANGED: Return safe defaults if outside provider
//   if (!context) {
//     console.warn("useAuth used outside AuthProvider - returning defaults");
//     return {
//       user: null,
//       loading: true,
//       isAdmin: false,
//       loginWithGoogle: () => Promise.resolve({ success: false }),
//       logout: () => Promise.resolve({ success: false })
//     };
//   }

//   return context;
// };

// // Auth Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);

//       if (currentUser && currentUser.email === ADMIN_EMAIL) {
//         setIsAdmin(true);
//       } else {
//         setIsAdmin(false);
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [ADMIN_EMAIL]);

//   const loginWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       console.log("✅ Logged in:", result.user.email);
//       return { success: true, user: result.user };
//     } catch (error) {
//       console.error("❌ Login error:", error);
//       return { success: false, error: error.message };
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       console.log("✅ Logged out");
//       return { success: true };
//     } catch (error) {
//       console.error("❌ Logout error:", error);
//       return { success: false, error: error.message };
//     }
//   };

//   const value = {
//     user,
//     loading,
//     isAdmin,
//     loginWithGoogle,
//     logout
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

import React, { createContext, useContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore"; // 👈 Added Imports
import { auth, googleProvider, db } from "../firebase/config"; // 👈 Ensure db is imported

// Create context with default values
const AuthContext = createContext(null);

// Custom hook to use auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.warn("useAuth used outside AuthProvider - returning defaults");
    return {
      user: null,
      loading: true,
      isAdmin: false,
      loginWithGoogle: () => Promise.resolve({ success: false }),
      logout: () => Promise.resolve({ success: false }),
    };
  }
  return context;
};

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      // 1. Admin Check
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      // 2. LINK VISITOR ID TO EMAIL 👇
      if (currentUser) {
        const currentVisitorId = localStorage.getItem("visitorId");

        if (currentVisitorId) {
          try {
            const visitorRef = doc(db, "visitors", currentVisitorId);
            // Update existing visitor doc with user details
            await updateDoc(visitorRef, {
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
              isRegistered: true, // Mark as logged in user
              lastSeen: serverTimestamp(),
            });
            console.log("🔗 Visitor linked to:", currentUser.email);
          } catch (error) {
            // It's okay if this fails (e.g., if visitor doc doesn't exist yet)
            console.log("Visitor link skipped:", error.message);
          }
        }
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [ADMIN_EMAIL]);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("✅ Logged in:", result.user.email);
      return { success: true, user: result.user };
    } catch (error) {
      console.error("❌ Login error:", error);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("✅ Logged out");
      return { success: true };
    } catch (error) {
      console.error("❌ Logout error:", error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    isAdmin,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
