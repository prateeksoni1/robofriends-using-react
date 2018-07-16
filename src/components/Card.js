import React from 'react';
import 'tachyons'

const Card = ({name, email, id}) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">

			<img alt='Robot' src={`https://robohash.org/${id}?200x200`}/>
			<div>
			<h2>{name}</h2>
			<h3>{email}</h3>
			</div>

		</div>
	);
}

export default Card;