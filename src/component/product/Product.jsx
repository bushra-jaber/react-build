import React from 'react'

export default function product(props) {
  return (
   
        <>
        <section className='col-md-4 p-0'>
            <div className='product'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <p>{props.price}</p>
            </div>
        </section>
        </>
      )
    }
    

