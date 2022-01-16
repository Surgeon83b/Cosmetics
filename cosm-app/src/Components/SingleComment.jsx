import React, { useState } from 'react';
import MyTextarea from './MyTextarea';

export default function SingleComment({ id, name, text, bgc, isShowedButton }) {
  const [_name, set_Name] = useState('');
  const [_text, set_Text] = useState('');

  const getName = (nam) => {
    set_Name(nam);
  }
  const getText = (tex) => {
    set_Text(tex);
  }
  const addComment = () => {
    alert(_name + ': ' + _text)
  }

  const addToComments = (id, nam, tex) => {
    alert('addToComments ' + localStorage[id]);
    if (JSON.parse(localStorage.getItem(id))===null) {
      try {
        let list = { name: "Вася", text: "Ничего так маслице" };
        localStorage.setItem(id, JSON.stringify(list));
      }
      catch (e) { alert(e) }
    } else {
      let list = JSON.parse(localStorage.getItem(id));
      const newComm = { name: nam, text: tex };
      list.push(newComm);
      localStorage.setItem(id, JSON.stringify(list));
    }
  }

  return (
    <form>
      <MyTextarea name={name} cols='60' rows='1' valu={name} isEdited='true' bgc={bgc} placeholder='⛹ Ваше имя' get={getName} />
      <MyTextarea name={text} cols='60' rows='2' valu={text} isEdited='true' bgc={'grey'} placeholder='Оставьте ваш отзыв' get={getText} />
      {isShowedButton && <input type="submit" align="right" value="Отправить" />}
      <button onClick={() => addToComments(id, _name, _text)}>test</button>
    </form>
  )
}
// onClick={addToComments(1, _name, _text)} 