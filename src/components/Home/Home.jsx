import React from 'react'
import './Home.css'
import Card from './Card/Card'

function Home() {
  return (
    <>
    <div className='about-container'>
      <img src="https://auts.ac.in/wp-content/uploads/2023/05/about_img.png" alt="about" />
      <div className='about-detail'>
        <h3>About Our Univerisity</h3>
        <h1>A Few Words About the University</h1>
        <p>From here… great scholars will spread the divine message of Sri Guru Granth Sahib among the people in the entire world in their respective languages resulting in universal peace and brotherhood:</p>
        <p>Three centuries ago, the tenth Master, Guru Gobind Singh Ji stayed at Talwandi Sabo, finalized the compilation of Guru Granth Sahib Ji and prophesied that this place will manifest as Guru Ki Kashi-a great Centre of teaching and learning from where will emerge great scholars of Sikhism.</p>
        <div className='list-container'>
          <ul className='list'>
            <li>
              <div className='list-number'>01</div>
              <div className='list-text'>
               <h2>Unique at AU</h2>
               <p>Our endeavour at Akal University is to help the students to discriminate between the valuable and the superficial in life.</p>
              </div>
            </li>
            <li>
              <div className='list-number'>02</div>
              <div className='list-text'>
               <h2>Akal Alumni</h2>
               <p>Since 2015 more than 700 students have graduated from Akal University and many of them are pursuing careers in the social sector.</p>
              </div>
            </li>
            <li>
              <div className='list-number'>03</div>
              <div className='list-text'>
               <h2>Scientific Events</h2>
               <p>The scientific events that shaped the decade. The microbes inside you, the edges of the known universe, and all the amazing stuff in between</p>
              </div>
            </li>
            <li>
              <div className='list-number'>04</div>
              <div className='list-text'>
               <h2>Societies & Clubs</h2>
               <p>Clubs and societies are possibly one of the single most important aspects of student life.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='campus-buzz-container'>
      <div className='campus-buzz-headings'>
        <h3>Activities @ Akal University</h3>
        <h1>Campus Buzz</h1>
      </div>
      <div className='cards'>
        <Card img='https://blog.auts.ac.in/wp-content/uploads/akal-univ-nov23-tmtw-header1-320x107.jpg' heading='Nov 23 TMTW - A month full of captivating experiences !' content="Akal Campus registered dynamic experiences and beautiful memories in November. The time went by fast with vibrant events, community welfare programs, workshops, competitions, etc. Here's a look back at glimpses of the major highlights of November Month. Blood Donation Camp With benevolent intentions and collaborative efforts, the Red Ribbon Club and National Service Scheme (NSS) […]" />
        <Card img='https://blog.auts.ac.in/wp-content/uploads/akal-univ-nov23-tmtw-header1-320x107.jpg' heading='Nov 23 TMTW - A month full of captivating experiences !' content="Akal Campus registered dynamic experiences and beautiful memories in November. The time went by fast with vibrant events, community welfare programs, workshops, competitions, etc. Here's a look back at glimpses of the major highlights of November Month. Blood Donation Camp With benevolent intentions and collaborative efforts, the Red Ribbon Club and National Service Scheme (NSS) […]" />
        <Card img='https://blog.auts.ac.in/wp-content/uploads/akal-univ-nov23-tmtw-header1-320x107.jpg' heading='Nov 23 TMTW - A month full of captivating experiences !' content="Akal Campus registered dynamic experiences and beautiful memories in November. The time went by fast with vibrant events, community welfare programs, workshops, competitions, etc. Here's a look back at glimpses of the major highlights of November Month. Blood Donation Camp With benevolent intentions and collaborative efforts, the Red Ribbon Club and National Service Scheme (NSS) […]" />
      </div>
    </div>
    </>
  )
}

export default Home