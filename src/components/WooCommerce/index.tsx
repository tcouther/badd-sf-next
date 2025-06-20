const API_PATH = 'https://www.badd-sf.org/woocommerce-api/';

const WooCommece = () => {

	const res = await fetch(API_PATH,{
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`
			).toString("base64")}`
		},
	});

	const data = await res.json();
	console.log(data);

	return (
		<div className="badd-store-content">
			<p className="fs-4">
				Show your support for Brothers Against Drug Deaths.
			</p>
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
		</div>
    );

};

export default WooCommerce;