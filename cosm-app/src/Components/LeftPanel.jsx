import React from 'react';
import '../styles/LeftPanel.css';
import MyList from './MyList';

const nameItems = ["Медузка", "Лотос и бамбук", "Крем увлажняющий", "CC-крем"];
const news = ["Мобильное приложение Mirror Me"];

export default function LeftPanel() {
  return (
    <section className="leftcol">
      <MyList name="Рейтинг средств" type="ol" list={nameItems}></MyList>
      <MyList name="Новости" type="ul" list={news}></MyList>
    </section>
  )
}
