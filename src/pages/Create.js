import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export default function Create() {
	return (
		<Container>
			<Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
				Create a new note
			</Typography>
			<Button 
        onClick={() => console.log(`Work`)} 
        type="submit" 
        color="secondary" 
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
				Submit
			</Button>

		</Container>
	);
}
