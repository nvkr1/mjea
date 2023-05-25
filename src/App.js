import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader";
import ScrollTopBtn from "./Components/ScrollTopBtn";
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import { Helmet } from "react-helmet";
import NotFound from "./Components/NotFound";
import { I18nextProvider } from "react-i18next";
import i18n from "./Components/i18n";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <>
        <Helmet>
          <title>Mongolian Joint Association of Exchange</title>
          <link rel='icon' type='image/png' href='favicon.ico' />
        </Helmet>
        <ScrollTopBtn />
        <I18nextProvider i18n={i18n}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/documents' element={<Documents />} />
          </Routes>
        </I18nextProvider>
      </>
    );
  }
}

export default App;
