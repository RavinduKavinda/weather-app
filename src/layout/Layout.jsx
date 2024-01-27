import React from 'react';
import Header from '../components/Header/Header';
import Main from './../pages/Main/Main';
import Error from '../components/Error-404/Error';


function Layout() {
  return (<>
    <Header/>
    <main>
      <Main/>
    </main>
    <Error/>
    </>
  );
}

export default Layout;