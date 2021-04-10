import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingTopBar from "../components/LoadingTopBar";
import "../styles/global.scss";

const Loading = dynamic(import("../components/LoadingCircle"), {
  loading: () => <LoadingTopBar />,
});
const Header = dynamic(import("../components/Header"), {
  loading: () => <LoadingTopBar />,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <div>
      <Header />
      {pageLoading ? <Loading /> : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
