import React from 'react'
import fetch from 'isomorphic-unfetch'


  function About({ data }) {
    return (
      <div>
        <ul>
            {data.map((item) => (
            <li key={item.id}>{item.name}{item.full_name}</li>
            ))}
        </ul>        
      </div>

    )
  }
  
  export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/andressamelo/repos')
    const data = await res.json()
  
    return {
      props: {
        data,
      },
    }
  }

  export default About
