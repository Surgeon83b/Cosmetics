import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LeftPanel from '../Components/LeftPanel';
import MyItem from '../Components/MyItem';
import SingleComment from '../Components/SingleComment';

import '../styles/Home.css';
import '../styles/MySection.css';

export default function AboutItem(props) {
  // const [itemID, setItemID] = useState(0);
  const data = props.location.propsSearch;
  // if (!props.location.propsSearch) return <Redirect to={{ pathname: '/pages/AboutItem', propsSearch: props }} />;
  // setItemID(data.id)
  const list = JSON.parse(localStorage.getItem(data.id));
  console.log('AboutItem '+data.id);

  return (
    <section className="secondflex">
      <LeftPanel />
      <section className="mainsec">
        <MyItem caption={data.caption} imgname={data.imgname} isDef={true} info={data.info} id={data.id} />

        <SingleComment id={data.id} name="" text="" isShowedButton={true}/>
        {"Список комментариев"}
        {list && list.map((item) => <SingleComment name={item.name} text={item.text} isShowedButton={false} id={data.id} />)}
      </section>

    </section>
  )
}

//{(listOfComments) && listOfComments.map((value, index) => <SingleComment name={value.name} text={value.text} bgc={'green'} isShowedButton='false' />)}