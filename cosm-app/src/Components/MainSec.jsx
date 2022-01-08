import React, { useState, useEffect } from 'react';
import './MainSec.css';
import MySection from './MySection';
import {getPagesArray, getPagesCount} from '../utils/pages.js'

export default function MainSec() {
	
	const items2 = [
		{capt: 'CC-крем', imgn: "/images/ss-krem-mary-kay.jpg", refi: "https://www.marykay.by/trendy/sovety/gid-po-bjyuti-aksessuaram/ss-krem-s-spf-15-mary-kay-svetlyy-estestvennyy"}
	];

	let datas = [];
	(async () => {
			let fromFile = await fetch('Data.json');
			if (fromFile.ok) {
				datas = await fromFile.json();
			} else
			alert("Ошибка HTTP: " + fromFile.status);
	})();
	//let data = require('../Data.json');
	
	const	[list1, setList1] = useState(datas);
	const	[list2, setList2] = useState(items2);
	const [count1, setcount1] = useState(list1.length);
	const [page1, setPage1] = useState(getPagesCount(count1, 4));
	
	
	let pagesArray = getPagesArray(page1);

  return (
    <section className="mainsec">
			<MySection name="Новинки" list={list1} pagesArray={pagesArray} />
			<MySection name="Бестселлеры" list={list2} pagesArray={pagesArray} />
    </section>  
  )
}
