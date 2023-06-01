import { type AppType } from "next/dist/shared/lib/utils";
import { Toaster } from "react-hot-toast";
import { RootLayout } from "~/components/RootLayout";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;
