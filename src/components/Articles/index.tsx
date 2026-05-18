"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import {normalizeImageUrl} from "../../utils/urlUtils"
    
//Globals
import GLOBALS from "../../app/globals.json";

interface IArticle {
	id?: string;
	image?: string;
	alt?: string;
	link?: string;
	description?: string;
	descriptionl?: string;
	source?: string;
	date?: string;
}

interface IData {
	date: string;
	items: IArticle[];
}

const pageSize = 9;

/*
	Data is controlled via Bluehost / Wordpress Admin / Articles Admin
	This admin plugin allows authorized users (CRUD) ADD/EDIT/DELETE articles
	The plugin maintains a JSON File accessible through a php based API:
*/
const Articles = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<IData>({ date: '', items: [] });
	const [dataByPage, setDataByPage] = useState<IData>({ date: '', items: [] });
	const [showMoreButton, setShowMoreButton] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const initiatePagination = async () => {
			try {
				const response = await fetch(GLOBALS.API.ARTICLES);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();
				json.items.reverse();

				setData(json);
				setLoading(false);

				const requestedPage = 1;
				const startIndex = 0;
				const endIndex = startIndex + (pageSize * requestedPage);
				const paginatedData = json.items.slice(startIndex, endIndex);

				if (paginatedData && paginatedData.length !== 0) {
					setDataByPage({ date: json.date, items: paginatedData });
					setCurrentPage(requestedPage);
				}

				if (paginatedData.length === json.items.length || json.items.length <= pageSize) {
					setShowMoreButton(false);
				}
			} catch (e) {
				console.warn(e);
				setLoading(false);
			}
		};

		initiatePagination();
	}, []);

	const showMore = () => {
		const requestedPage = currentPage + 1;
		const startIndex = 0;
		const endIndex = startIndex + (pageSize * requestedPage);
		const paginatedData = data.items.slice(startIndex, endIndex);
		
		if (paginatedData && paginatedData.length !== 0) {
			setDataByPage({ date: data.date, items: paginatedData });
			setCurrentPage(requestedPage);
		}

		if (paginatedData.length === data.items.length) {
			setShowMoreButton(false);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="badd-articles">
			<ul id="news-articles" className="row article-row" aria-label="news articles">
				{dataByPage && dataByPage.items.map((article: IArticle) => (
					<li key={article.id} className="col-md-4" aria-label="article">
						<div className="card mb-4 box-shadow">
							<div className="card-image-frame">
								{article.image && (
									<Image
										src={normalizeImageUrl(article.image)}
										width={1000}
										height={800}
										alt=""
										aria-hidden={true}
										className="card-img-top article-image"
										unoptimized={true}
									/>
								)}
							</div>
							<div className="card-body">
								<div className="card-text-frame card-text">
									<p className="fs-6">
										{article.description}
										<span className="d-sm-none d-md-inline">...</span>
										<span> </span>
										<span className="d-md-none">{article.descriptionl}</span>
									</p>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<div className="btn-group">
										<a 
											type="button" 
											href={article.link} 
											target="_blank" 
											rel="noopener noreferrer"
											className="btn btn-sm btn-outline-secondary"
											aria-label="Read article"
										>
											More
										</a>
									</div>
									<small className="card-date text-muted">
										<span aria-label={`article source: ${article.source}`}>{article.source}</span>
										<br/>
										<span aria-label={`article date: ${article.date}`}>{article.date}</span>
									</small>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			<p className="general-content">
				{showMoreButton && (
					<button 
						type="button" 
						className="btn btn-md btn-outline-secondary" 
						onClick={showMore} 
						aria-label="Show more news articles above"
					>
						More News Articles
					</button>
				)}
			</p>
		</div>
	);
};

export default Articles;