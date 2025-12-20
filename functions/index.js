// const { onCall, HttpsError } = require("firebase-functions/v2/https");
// const { defineSecret } = require("firebase-functions/params");
// // const fetch = require("node-fetch");

// // 1. Define the secret (Must match what you typed in the terminal)
// const geminiApiKey = defineSecret("GEMINI_API_KEY");

// // 2. Pass the secret to the function configuration
// exports.callGemini = onCall({ secrets: [geminiApiKey] }, async (request) => {
//   // Check if user is authenticated (Optional - comment out if testing without auth)
//   // if (!request.auth) {
//   //   throw new HttpsError("unauthenticated", "User must be logged in.");
//   // }

//   try {
//     // 3. Access the secret value
//     const apiKey = geminiApiKey.value();
//     const { prompt, maxTokens } = request.data;

//     console.log("Attempting to call Gemini API..."); // This helps debug in logs

//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [{ parts: [{ text: prompt }] }],
//           generationConfig: {
//             temperature: 0.7,
//             maxOutputTokens: maxTokens || 1024
//           },
//         }),
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("Gemini API Refused:", errorText); // This will show up in Firebase Logs
//       throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Detailed Function Error:", error);
//     // Throwing this specific error allows the frontend to see it
//     throw new HttpsError("internal", "Failed to generate content: " + error.message);
//   }
// });

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

// Define the secret
const geminiApiKey = defineSecret("GEMINI_API_KEY");

// Define your Model Hierarchy
// 1. Primary: The one you want to use most
// 2. Fallback: The one to use if Primary is exhausted
const PRIMARY_MODEL = "gemini-2.5-flash-lite";
const FALLBACK_MODEL = "gemini-2.5-flash"; // Or "gemini-2.5-flash" if available to you

exports.callGemini = onCall({ secrets: [geminiApiKey] }, async (request) => {
  const apiKey = geminiApiKey.value();
  const { prompt, maxTokens } = request.data;

  // Helper function to call specific model
  const callModel = async (modelName) => {
    console.log(`🚀 Attempting to call model: ${modelName}`);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: maxTokens || 1024,
          },
        }),
      }
    );
    return response;
  };

  try {
    // --- ATTEMPT 1: PRIMARY MODEL ---
    let response = await callModel(PRIMARY_MODEL);

    // Check if we hit a Rate Limit (429) or Service Unavailable (503)
    if (response.status === 429 || response.status === 503) {
      console.warn(
        `⚠️ ${PRIMARY_MODEL} quota exceeded or down (${response.status}). Switching to fallback...`
      );

      // --- ATTEMPT 2: FALLBACK MODEL ---
      response = await callModel(FALLBACK_MODEL);
    }

    // If response is still bad after fallback, throw error
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API Error (${response.status}): ${errorText}`);
    }

    // Success! Return data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Critical AI Failure:", error);
    throw new HttpsError(
      "internal",
      "AI Service Unavailable: " + error.message
    );
  }
});
