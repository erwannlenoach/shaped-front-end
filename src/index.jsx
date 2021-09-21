import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'components/Navbar';
import Cards from 'components/Cards';
import Footer from 'components/Footer'
import 'styles/index.scss'


const App = () => {
  return <>
    <Navbar />
    <Cards/>
    <Footer />
  </>

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

