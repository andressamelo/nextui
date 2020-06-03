import React from 'react'
import fetch from 'isomorphic-unfetch'


function Faq({ data }) {
    return (
    <div>
        <ul>
            {data.map((item) => (
            <li key={item.id}>{item.question}{item.answer}</li>
            ))}
        </ul>        
    </div>

    )
  }
  
  export async function getStaticProps() {
    const res = await fetch('https://fitplayapp.s3.amazonaws.com/production/data/faq.json')
    const data = await res.json()
  
    return {
      props: {
        data,
      },
    }
  }
  
export default Faq