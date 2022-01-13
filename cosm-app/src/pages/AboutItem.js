import React from 'react';
import LeftPanel from '../Components/LeftPanel';
import MyItem from '../Components/MyItem';
import '../styles/Home.css';
import '../styles/MySection.css';

export default function AboutItem(props) {
  const data = props.location.propsSearch;
  console.log(data.imgname);
  return (
    <section className="secondflex">
      <LeftPanel />
      <section className="mainsec">
        <MyItem caption={data.caption} imgname={data.imgname} isDef={true} info={data.info} />
      </section>
    </section>
  )
}
