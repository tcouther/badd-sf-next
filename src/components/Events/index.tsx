"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
    
// Important: event updates must change date for caching
const EventsDataUrl = '/badd-data/events.json?date=10-31-2025';

interface IEvent {
	id? : string;
	image? : string;
	alt? : string;
	link? : string;
	description? : string;
	title? : string;
	location? : string;
	date? : string;
};

interface IData {
	date : string;
	items : IEvent[];
}

const emptyEvent = {
	id : "string",
	image : "/",
	alt : "string",
	link : "string",
	description : "string",
	descriptionl : "string",
	source : "string",
	date : "string"
};

const pageSize = 6;


const Events = () => {

	const [data, setData] = useState<IData>({date:'', items:[emptyEvent]});
	const [dataDate, setDataDate] = useState('');
	const [dataByPage, setDataByPage] = useState<IData>({date:'', items:[emptyEvent]});
	const [currentPage, setCurrentPage] = useState(1);
	const [showMoreButton, setShowMoreButton] = useState(true);
	const [loading, setLoading] = useState(true);

	const setPaginatedData = (requestedPage:number, dataset:IData)=>{
		const startIndex = 0;
		const endIndex = startIndex + (pageSize * requestedPage);
		const paginatedData:IEvent[] = dataset.items.slice(startIndex, endIndex);
		
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

	const initiatePagination = useCallback((json:IData)=>{
		setPaginatedData(1,json);
	},[setPaginatedData]);

	const fetchData = useCallback(async ()=>{
		try {
			const response = await fetch(EventsDataUrl);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const json = await response.json();
			json.items.reverse();

			setData(json);
			setDataDate(json.date);
			setLoading(false);

			initiatePagination(json);

			if ( json.items.length <= pageSize ) {
				setShowMoreButton(false);
			}
		} catch (e) {
			console.warn(e);
			setLoading(false);
		}
	},[initiatePagination]);


	useEffect(() => {

		fetchData();

	},[fetchData]);

	if (loading) {
		return <p>Loading events...</p>;
	}

	return (
	<div className="badd-articles">
		<div id="events" className="card-deck events-deck" aria-label="events">

			{dataByPage && dataByPage.items.map((event:IEvent) => (
				<div key={event.id} className="card mb-4 box-shadow" aria-label="event">
						<div className="card-image-frame">
							{ event.image && (<Image
								src={event.image}
								width={1000}
								height={800}
								alt=""
								aria-hidden={true}
								className="card-img-top article-image" 
							/>) }
						</div>
						<div className="card-body">

							<div className="card-text px-3">
								<h4>{event.title}</h4>
								<p>
									{event.description}
								</p>
							</div>

						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
									<a type="button" 
									href={event.link} 
									target="_blank" 
									className="btn btn-sm btn-outline-secondary"
									aria-label="Learn More about this Event"
									>Learn more</a>
								</div>
								<small className="card-date text-muted">
									<span>{event.location}</span>
									<br/>
									<span aria-label={`event date: ${event.date}`}>{event.date}</span>
								</small>
							</div>
						</div>
				</div>
			))}
		</div>
		<p className="general-content">
			{showMoreButton && (<button type="button" className="btn btn-md btn-outline-secondary" onClick={showMore} aria-label="Show more events above">More Events</button>)}
		</p>
	</div>
    );

};

export default Events;