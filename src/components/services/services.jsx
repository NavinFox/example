import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';



const services = () => {
  return (
    <div id='section6'>
      <section id='services'>
    
      <h2>Education Qualification</h2>
     

      <div className='container services__container'>
        <article className='service'>
          <div className='services-head'>
          <h3>SSLC</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>AVM English Med High School</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Bangalore, Karnataka</p>
          </li>
          </ul>
        </article>

        <article className='service'>
          <div className='services-head'>
          <h3>PUC ( PCMC )</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Basaweshwara Pre University College</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Bangalore, Karnataka</p>
          </li>
          </ul>
        </article>

        <article className='service'>
          <div className='services-head'>
          <h3>DEGREE ( BCA )</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Vivekananda institute of management</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Bangalore, Karnataka</p>
          </li>
          </ul>
        </article>
            {/* <div className='service__list'>
            <h3>OTHER SKILLS</h3>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Microsoft Office, Excel Lookup</p>
          </li>
            </div> */}

      </div>

      </section>
    </div>
  )
}

export default services
