import "../styles/globals.css";
import ContextWrapper from "../components/ContextWrapper";
import { ClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
  return (
    <ContextWrapper>
      <ClerkProvider
        frontendApi={clerkFrontendApi}
        navigate={(to) => router.push(to)}
      >
        <Component {...pageProps} />
      </ClerkProvider>
    </ContextWrapper>
  );
}

export default MyApp;
