import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import NoteCard from '../components/NoteCard'
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

	const handleDelete = async (id)=>{
		await fetch('http://localhost:8000/notes/'+id, {
			method: 'DELETE'
		});
		const newNotes = notes.filter((note)=> note.id !== id);
		setNotes(newNotes);
	}


	return (
		<Container>
			<Grid container spacing={3}>
				{notes.map((note) => (
					<Grid item xs={12} md={6} lg={4} key={note.id}>
						<NoteCard note={note} handleDelete={handleDelete} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

//json-server --watch data/db.json --port 8000
