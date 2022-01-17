import React, { useState } from 'react';
import '../styles/Ranking.css'
import '../styles/MySection.css';
import MyTextarea from '../Components/MyTextarea';
import Base from '../Components/Base';
import SingleComment from '../Components/SingleComment';

export default function Contacts() {
  let tlist = [];
  if (localStorage.getItem("contacts") !== null) {
    tlist = JSON.parse(localStorage.getItem("contacts"));
  }

  const [curName, setCurName] = useState('');
  const [curEmail, setCurEmail] = useState('');
  const [curComment, setCurComment] = useState('');
  const [list, setList] = useState(tlist);
 // alert(tlist);

  const getName = (name) => {
    setCurName(name);
  }
  const getEmail = (email) => {
    setCurEmail(email);
  }
  const getComment = (comment) => {
    setCurComment(comment);
  }

  const addContacts = (e) => {
    e.preventDefault();
    const toAdd = {
      name: curName,
      email: curEmail,
      comment: curComment
    }
    alert(toAdd);
    setList(list.push(toAdd));
    localStorage.setItem("contacts", JSON.stringify(list));
  }

  return (
    <Base add={
      <section className='mainsec'>
        <h3 align="left">Контакты<hr align="left"></hr></h3>
        <h4 align="left">Оставьте ваш отзыв о нашем портале</h4>
        <form onSubmit={(e) => addContacts(e)}> 
          <MyTextarea name="yourname" type='ADD' isFor='name' cols="80" rows="1" placeholder='⛹ Ваше имя' get={getName}/>
          <MyTextarea name="email" type='ADD' isFor='email' cols="80" rows="1" placeholder='✉ Ваш e-mail' get={getEmail}/>
          <MyTextarea name="comment" type='ADD' isFor='text' cols="80" rows="3" placeholder='Оставьте ваш отзыв' get={getComment} />
          <input type="submit" align="right" value="Отправить" />
        </form>
        <h4>Отзывы</h4>
        {list?.map((item) => <SingleComment key={item.email} name={item.name} text={item.comment} isShowedButton={false} />)}
      </section>
    } />
  )
}
