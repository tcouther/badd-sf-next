"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
    
const ArticlesUrl = '/badd-data/articles.json';

interface IArticle {
	id? : string;
	image? : string;
	alt? : string;
	link? : string;
	description? : string;
	descriptionl? : string;
	source? : string;
	date? : string;
};

interface IData {
	date : string;
	items : IArticle[];
}

const emptyArticle = {
	id : "string",
	image : "/",
	alt : "string",
	link : "string",
	description : "string",
	descriptionl : "string",
	source : "string",
	date : "string"
};

const pageSize = 3;


const Articles = () => {

	const [data, setData] = useState<IData>({date:'', items:[emptyArticle]});
	const [dataDate, setDataDate] = useState('');
	const [dataByPage, setDataByPage] = useState<IData>({date:'', items:[emptyArticle]});
	const [currentPage, setCurrentPage] = useState(1);
	const [showMoreButton, setShowMoreButton] = useState(true);
	const [loading, setLoading] = useState(true);
	
	const setPaginatedData = (requestedPage:number, dataset:IData)=>{
		const startIndex = 0;
		const endIndex = startIndex + (pageSize * requestedPage);
		const paginatedData:IArticle[] = dataset.items.slice(startIndex, endIndex);
		
		if (paginatedData && paginatedData.length !== 0) {
			setDataByPage({date:dataDate, items:paginatedData});

			if ( requestedPage !== currentPage ) {
				setCurrentPage( requestedPage );
			}
		}

		if ( paginatedData.length === data.items.length ) {
			setShowMoreButton(false);
		}
	};

	const showMore = ()=>{
		
		const requestedPage = currentPage + 1;
		setPaginatedData(requestedPage, data);
	};

	useEffect(() => {
	
		const fetchData = async () => {
			try {
				const response = await fetch(ArticlesUrl);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();
				json.items.reverse();

				setData(json);
				setDataDate(json.date);
				setLoading(false);

				setPaginatedData(1,json);
			} catch (e) {
				console.warn(e);
				setLoading(false);
			}
		};

		fetchData();

	},[]);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
	<div className="badd-articles">
		<ul id="news-articles" className="row article-row" aria-label="news articles">

			{dataByPage && dataByPage.items.map((article:IArticle) => (
				<li key={article.id} className="col-md-4" aria-label="article">
					<div className="card mb-4 box-shadow">
						<div className="card-image-frame">
							{ article.image && (<Image
								src={article.image}
								width={1000}
								height={800}
								alt=""
								aria-hidden={true}
								className="card-img-top article-image" 
							/>) }
						</div>
						<div className="card-body">
							<div className="card-text-frame card-text">
								<p>
									{article.description}
									<span className="d-sm-none d-md-inline">...</span>
									<span> </span>
									<span className="d-md-none">{article.descriptionl}</span>
								</p>
							</div>
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
									<a type="button" 
									href={article.link} 
									target="_blank" 
									className="btn btn-sm btn-outline-secondary"
									aria-label="Read article"
									>More</a>
								</div>
								<small className="card-date text-muted">
									<span aria-label={`article source: ${article.source}`}>{article.source}</span>
									<br/>
									<span aria-label={`article date: ${article.source}`}>{article.date}</span>
								</small>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
		<p className="general-content">
			{showMoreButton && (<button type="button" className="btn btn-md btn-outline-secondary" onClick={showMore} aria-label="Show more news articles above">More News Articles</button>)}
		</p>
	</div>
    );

};

export default Articles;