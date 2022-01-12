import React, {useState, useEffect} from 'react';
import './Ranking.css'
import LeftPanel from '../Components/LeftPanel';
import MySection from '../Components/MySection';
import {getData} from '../utils/pages.js'

export default function Ranking() {

  const	[list1, setList1] = useState(getData('../Data.json'));
/*	useEffect(()=>{
    setList1(getData('../Data.json'))
  },[]);*/

  return (
    <>
      <div className="container" >
          <section className="secondflex"> 
            <LeftPanel /> 
            <section className="mainsec">
              <MySection name="Рейтинг средств" list={list1} pagesArray={[1,2]} clname="sec12" isDef="true"/>
            </section>    
          </section>
      </div>
    </>
  )
}