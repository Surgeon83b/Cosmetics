import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MyItem from '../Components/MyItem';
import SingleComment from '../Components/SingleComment';
import Base from '../Components/Base';

import '../styles/Home.css';
import '../styles/MySection.css';

export default function AboutItem() {
  const params = useParams();
  const itID = params.id;
  alert('AboutItem ' + itID);

  const [list, setList] = useState(JSON.parse(localStorage.getItem(itID)));
  const [list1, setList1] = useState([]);
  // const list = JSON.parse(localStorage.getItem(data.id));

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
        setList1(myJson);
      })
  }

  getData('/public/Data.json');

  const refreshList = (list) => {
    setList(list);
  }

  let curObj = list1.find((elem) => { return elem.id === itID })

  return (
    <Base add={
      <section className="mainsec">
        <MyItem caption={curObj.capt} imgname={curObj.imgn} isDef info={curObj.info} id={itID} />

        <SingleComment id={itID} name="" text="" isShowedButton={true} set={refreshList} />
        {"Список комментариев"}
        {list?.map((item) => <SingleComment key={itID} name={item.name} text={item.text} isShowedButton={false} id={itID} />)}
      </section>
    } />
  )
}

//{(listOfComments) && listOfComments.map((value, index) => <SingleComment name={value.name} text={value.text} bgc={'green'} isShowedButton='false' />)}
// list - как состояние, передать функцию пропсом