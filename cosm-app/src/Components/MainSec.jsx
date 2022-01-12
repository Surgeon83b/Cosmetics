import React, { useState, useEffect } from 'react';
import './MainSec.css';
import MySection from './MySection';
import {getPagesArray, getPagesCount, getData} from '../utils/pages.js'

export default function MainSec({isDef}) {

	const items2 = [
		{capt: 'CC-крем', imgn: "/images/ss-krem-mary-kay.jpg", refi: "https://www.marykay.by/trendy/sovety/gid-po-bjyuti-aksessuaram/ss-krem-s-spf-15-mary-kay-svetlyy-estestvennyy"}
	];

	async function getData(url) {
		const data = await fetch(url,
		{
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			 }
		});
		return await data.json();
	}
	const	[list1, setList1] = useState(getData('Data.json'));
/*	const getData = (url) => {
		fetch(url,
		{
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			 }
		})
			.then(function(response){
				console.log(response)
				return response.json();
			})
			.then(function(myJson) {
        console.log(myJson);
				setList1(myJson)
        })
	}*/


	useEffect(()=>{
    setList1(getData('Data.json'))
  },[]);

	const	[list2, setList2] = useState(items2);
	const [count1, setcount1] = useState(list1.length);
	const [page1, setPage1] = useState(getPagesCount(count1, 4));
	
	
	let pagesArray = getPagesArray(page1);

  return (
    <section className="mainsec">
			<MySection name="Новинки" list={list1} pagesArray={pagesArray} clname="sec11" isDef={isDef}/>
			<MySection name="Бестселлеры" list={list2} pagesArray={pagesArray} />
    </section>  
  )
}
