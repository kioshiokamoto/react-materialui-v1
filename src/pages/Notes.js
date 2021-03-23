import React, { useEffect, useState } from 'react';

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
    <div>
      {notes.map(note =>(
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}

//json-server --watch data/db.json --port 8000 
