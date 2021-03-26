import React from 'react';
import { makeStyles, Drawer, Typography } from '@material-ui/core';

const drawerWidth = 240


const useStyles = makeStyles({
    root:{
        display:'flex'
    },
	page: {
		background: '#f9f9f9',
		width: '100%',
	},
    drawer:{
        width:drawerWidth
    },
    drawPaper:{
        width:drawerWidth
    }
});
const Layout = ({ children }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
            {/* appbar */}

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawPaper}}
            >
                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>
            </Drawer>

			<div className={classes.page}>
                {children}
            </div>
		</div>
	);
};

export default Layout;
