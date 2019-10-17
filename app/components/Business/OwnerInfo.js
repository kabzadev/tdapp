import React from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { PapperBlock } from 'dan-components';

export default class OwnerInfo extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <React.Fragment>
        <PapperBlock title="Owner Info" desc="In this section provide the owner contact information. Name, mailing address, phone and email. The owner’s Federal id or social security number is required and kept strictly confidential per Florida Statute (FS) 213.05 are your recurrent gistered businesses.">
        <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Rental Property Owner Name"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Owner Mailing address"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Owner Phone#"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Owner City"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Owner State"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Country"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Owner Zip"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Owner Email"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <TextField
                        id="outlined-full-width"
                        label="Indicate whether registering with SSN or FEIN"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>        
        </PapperBlock>
           

        </React.Fragment>
    }
}