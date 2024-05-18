import React from 'react';
import Layout from '../Layout';
import "../Navbar.css";
import './VerifyNews.css';

function VerifyNews() {
  return (
    <Layout className="container">
      <h2><b>VeriFy News</b></h2>

      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <div className="container5">

             <textarea placeholder="Enter New Here...." style={{ width: '700px', height: '250px' }} required></textarea>
     

      <br/><br/>

      <button type="button">Verify it</button>
       
      <br/>
      </div>
      <h3 id="realNews" className='h3'>Real News</h3>

      <span className='span1' style={{ color: 'green' }}>Real News Probability 90%</span> 
      <span className='span2' style={{ color: 'red' }}>Fake News Probability 10%</span>
    </Layout>
  );
}

export default VerifyNews;


