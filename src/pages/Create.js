import React from 'react';
import {
	Typography,
	Button,
	Container,
	makeStyles,
	TextField,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormLabel,
	FormControl,
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useState } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
	},
});

export default function Create() {
	const classes = useStyles();
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');

	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const [category, setCategory] = useState('todos');
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		setTitleError(false);
		setDetailsError(false);

		if (title === '') {
			setTitleError(true);
		}
		if (details === '') {
			setDetailsError(true);
		}

		if (title && details) {
			fetch('http://localhost:8000/notes', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({title,details,category})
			}).then(()=> history.push('/'))
		}
	};

	return (
		<Container>
			<Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
				Create a new note
			</Typography>
			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => setTitle(e.target.value)}
					className={classes.field}
					label="Note title"
					variant="outlined"
					color="secondary"
					fullWidth
					required
					error={titleError}
				/>
				<TextField
					onChange={(e) => setDetails(e.target.value)}
					className={classes.field}
					label="Details"
					variant="outlined"
					color="secondary"
					multiline
					rows={4}
					fullWidth
					required
					error={detailsError}
				/>
				<FormControl className={classes.field}>
					<FormLabel>Note category</FormLabel>

					<RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
						<FormControlLabel value="money" control={<Radio />} label="Money" />
						<FormControlLabel value="todos" control={<Radio />} label="Todos" />
						<FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
						<FormControlLabel value="works" control={<Radio />} label="Money" />
					</RadioGroup>
				</FormControl>

				<Button type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon />}>
					Submit
				</Button>
			</form>
		</Container>
	);
}
