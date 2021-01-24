import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Sara Palacios | Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Sara Palacios | Portfolio'} />
        <meta property='og:title' content='Sara Palacios | Portfolio' />
  <meta property='og:image'
    content='https://raw.githubusercontent.com/SaraPalacioss/portfolio/main/src/images/screenshoot.png?token=AQTVNFDC2YPBNKRCBL4K4GDABXCNE' />

  <meta property='og:url' content='https://www.sarapalacios.me' />
      </Helmet>
      <App />
    </>
  );
};
