import React from "react";
import { Grid, GridColumn, IconGroup, Icon } from 'semantic-ui-react'


function Footer() {

    const year = new Date().getFullYear();

    return (
        <Grid>
            <GridColumn floated='left' width={8}>
                <div className="icon-container">
                <a href="https://github.com/seanRoshan" target="_blank"><Icon link size="large" className="icon-clickable footer" inverted color="white" name='github' /></a>
                <a href="https://linkedin.com/in/seanroshan" target="_blank"><Icon link size="large" className="icon-clickable footer" inverted color="white" name='linkedin' /></a>
                <a href="https://stackoverflow.com/users/19791206/sean-roshan" target="_blank"><Icon link size="large" className="icon-clickable footer" inverted color="white" name='stack overflow' /></a>
                <a href="https://twitter.com/seanRoshandev" target="_blank"><Icon link size="large" className="icon-clickable footer" inverted color="white" name='twitter' /></a>
                </div>
            </GridColumn>
            <GridColumn floated='right' textAlign="right" width={8}>
                <span className="copy-right">
                    Copyright © {year} All Rights Reserved by
                    <a href="https://www.seanroshan.com" rel="noopener noreferrer" target="_blank"
                        className="copy-right-link">Sean Roshan</a>
                </span>
            </GridColumn>
        </Grid>
    );
}

export default Footer;