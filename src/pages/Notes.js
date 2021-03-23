import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
export default function Notes() {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const res = await fetch('http://localhost:8000/notes');
			const data = await res.json();
			setNotes(data);
			//console.log(data);
		};
		getData();
	}, []);
	return (
		<Container>
			<Grid container>
				{notes.map((note) => (
					<Grid item xs={12} sm={6} md={4} key={note.id}>
						<Paper>{note.title}</Paper>

					</Grid>
				))}
			</Grid>
		</Container>
	);
}

//json-server --watch data/db.json --port 8000
