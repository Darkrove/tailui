import "../styles/globals.css";
import ContextWrapper from "../components/ContextWrapper";
import { ClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/router";

import Navigation from "../components/Navbar.component";
import Sidebar from "../components/Sidebar.component";
import Layout from "../containers/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
  return (
    <ContextWrapper>
      <ClerkProvider
        frontendApi={clerkFrontendApi}
        navigate={(to) => router.push(to)}
      >
        {router.pathname === "/" ||
        router.pathname === "/signin" ||
        router.pathname === "/signup" ? (
          <>
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <Navigation />
            <Sidebar />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        )}
      </ClerkProvider>
    </ContextWrapper>
  );
}

export default MyApp;
