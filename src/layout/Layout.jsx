import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Error from '../components/Error-404/Error';


function Layout() {
  return (<>
    <Header/>
    <Main/>
    <Error/>
    </>
  );
}

export default Layout;