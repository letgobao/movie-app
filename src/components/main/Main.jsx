import React from 'react'
import { mainData } from '../../data/dummyData'
import Slides from '../slide/Slides'
import './Main.css'
const Main = () => {
  return (
    <section className='main'>
        <Slides data={mainData}/>
    </section>
    
  )
}

export default Main
