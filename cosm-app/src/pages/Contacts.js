import React from 'react';
import LeftPanel from '../Components/LeftPanel';
import '../styles/Ranking.css'
import '../styles/MySection.css';
import MyTextarea from '../Components/MyTextarea';

export default function Contacts() {
  return (
    <section className="secondflex">
      <LeftPanel />
      <section className='mainsec'>
        <h3 align="left">Контакты<hr align="left"></hr></h3>
        <h4 align="left">Оставьте ваш отзыв о нашем портале</h4>
        <form>
          <MyTextarea name="yourname" cols="80" rows="1" placeholder='⛹ Ваше имя' />
          <MyTextarea name="email" cols="80" rows="1" placeholder='✉ Ваш e-mail' />
          <MyTextarea name="comment" cols="80" rows="3" placeholder='Оставьте ваш отзыв' />
          <input type="submit" align="right" value="Отправить" />
        </form>
      </section>
    </section >
  )
}
