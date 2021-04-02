import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import "../styles/global.scss";

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
