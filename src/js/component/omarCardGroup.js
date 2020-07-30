import React from "react";

export function CardGroup() {
	let contentList = [
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quidem. Commodi dolorum cum vel blanditiis, omnis, impedit corrupti incidunt laborum sequi inventore eaque!",

		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eius laborum corrupti ut. Id, ullam!",

		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, est ea sunt pariatur repellendus voluptas nesciunt officiis eius corrupti ipsam explicabo eos amet! Beatae quo soluta sed voluptatem!",

		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, fugiat a? Accusantium."
	];

	return (
		<div className="card-deck">
			{contentList.map((content, index) => {
				return (
					<div className="card text-center" key={index}>
						<a href="https://via.placeholder.com">
							<img
								src="https://via.placeholder.com/500x325"
								className="card-img-top"
							/>
						</a>
						<div className="card-body">
							<h5 className="card-title">Card Title</h5>
							<p className="card-text">{content}</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">
								Find Out More
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}
