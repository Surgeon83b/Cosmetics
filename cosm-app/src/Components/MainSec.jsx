import React, { useState, useEffect } from 'react';
import '../styles/MainSec.css';
import MySection from './MySection';
import { getPagesArray, getPagesCount } from '../utils/pages.js'

export default function MainSec({ isDef }) {

	const [list1, setList1] = useState([]);
	//	const [list2, setList2] = useState([]);

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

	useEffect(() => {
		(getData('Data.json'))
	}, []);

	//	const [count1, setcount1] = useState(list1.length);
	//const [page1, setPage1] = useState(getPagesCount(6, 4));
	const page1 = getPagesCount(6, 4);
	let pagesArray = getPagesArray(page1);

	return (
		<section className="mainsec">
			<MySection name="Новинки" list={list1} pagesArray={pagesArray} clname="sec11" isDef={isDef} />
			<MySection name="Бестселлеры" list={list1} pagesArray={pagesArray} clname="sec11" isDef={isDef} />
		</section>
	)
}
