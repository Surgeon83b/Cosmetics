import React, { useState, useEffect } from 'react';
import '../styles/Ranking.css'
import LeftPanel from '../Components/LeftPanel';
import MySection from '../Components/MySection';
//import { getData } from '../utils/pages.js'

export default function Ranking() {

  const getData = (url) => {
    fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setList1(myJson)
      })
  }
  const [list1, setList1] = useState([]);
  useEffect(() => {
    getData('../Data.json')
  }, []);

  return (
    <section className="secondflex">
      <LeftPanel />
      <section className="mainsec">
        <MySection name="Рейтинг средств" list={list1} pagesArray={[1, 2]} clname="sec12" isDef="true" />
      </section>
    </section>
  )
}