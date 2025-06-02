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
	source? : string;
	date? : string;
};

interface IData {
	date : string;
	items : [IArticle];
}

const emptyArticle = {
	id : "string",
	image : "string",
	alt : "string",
	link : "string",
	description : "string",
	source : "string",
	date : "string"
};

const Articles = () => {

	const [data, setData] = useState<IData>({date:'', items:[emptyArticle]});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
	
		const fetchData = async () => {
			try {
				const response = await fetch(ArticlesUrl);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();
				setData(json);
				setLoading(false);
			} catch (e) {
				console.warn(e);
				setLoading(false);
			}
		};

		fetchData();

	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<ul className="row article-row">

			{data && data.items.map((article:IArticle) => (
				<li key={article.id} className="col-md-4" aria-label="article">
					<div className="card mb-4 box-shadow">
						<div className="card-image-frame">
							{ article.image && (<Image
								src={article.image}
								layout="responsive"
								width={1000}
								height={800}
								alt=""
								aria-hidden={true}
								className="card-img-top article-image" 
							/>) }
							

						</div>
						<div className="card-body">
							<div className="card-text-frame card-text">
								{article.description}
							</div>
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
									<a type="button" 
									href={article.link} 
									target="_blank" 
									className="btn btn-sm btn-outline-secondary"
									aria-label="Read article"
									>Read</a>
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
    );

};

export default Articles;