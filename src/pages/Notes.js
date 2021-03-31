import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css';
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

	const breakpoints= {
		default:3,
		1100:2,
		700:1
	}
	return (
		<Container>
			<Masonry
				breakpointCols={breakpoints}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{notes.map((note) => (
					<div key={note.id}>
						<NoteCard note={note} handleDelete={handleDelete} />
					</div>
				))}
			</Masonry>
		</Container>
	);
}

//json-server --watch data/db.json --port 8000
