import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material/';
import './styles.css';
import { Link } from 'react-router-dom';
import Vishnu from '../images/Vishnu.png';
import azhwarsList from '../data/azhwarsList';

export default () => {
	const landingPageItems = azhwarsList();

	return (
		<Typography component="div" className="landingPageContainer">
			<Typography component="h1" className="heading" color="primary">
				The Divine Lives & Works of the Alwars
			</Typography>
			<Typography component="div" id="sunrays"></Typography>
			<Typography component="img" className="backgroundImage" src={Vishnu}></Typography>
			<Grid
				container
				id="mainContainer"
				position={'absolute'}
				className="mainContainer"
				sx={{ mx: 'auto', width: '100%', height: '80%' }}>
				{landingPageItems.map((item) => {
					return (
						<Grid
							item
							key={item.key}
							id={item.key}
							position={'relative'}
							sx={{ mx: 'auto', width: 100, height: 100 }}>
							<Link className="nav-link" to={`/azhwars/:${item.key}`}>
								<Avatar sx={{ width: 100, height: 100 }} alt={item.name} src={item.image} />
								<Typography variant="h4" className="name">
									{item.name}
								</Typography>
							</Link>
						</Grid>
					);
				})}
			</Grid>
		</Typography>
	);
};
