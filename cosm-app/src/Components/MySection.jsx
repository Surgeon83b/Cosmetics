import React from 'react';
import MyItem from './MyItem.jsx';
import './MySection.css';

export default function MySection({name, list, pagesArray}) {
  return (
    (list) 
        ?
        <>
          <section className="sec1"> 
            <h3 align="left">{name}<hr align="left"></hr></h3>        
            <section className="sec12">
              {list.map((item, index) => <MyItem caption={item.capt} imgname={item.imgn} refi={item.refi} /> )}              
            </section>
            <div className='page__wrapper'>
                {pagesArray.map(p => <span className='page'>{p}</span>)}
            </div> 
          </section>
        </>
        :
        <>
        </>
  )
}
