// app/providers.tsx
// _app.jsx
"use client"
 // Import useClient from the correct package
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
// Mark the entire application as a Client Component

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
