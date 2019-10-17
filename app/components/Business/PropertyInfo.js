import React from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { PapperBlock } from 'dan-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class PropertyInfo extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <React.Fragment>
            <PapperBlock title="Property Info" desc="In this section enter the rental property information. If an individual property is being registered, there may not be a business name. If a hotel is being registered then the hotel name.">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id="outlined-full-width"
                            label="Rental property business name (if applicable)"
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
                            label="Rental property street address"
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
                            label="Tower & Unit number (If applicable)"
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
                            label="Rental property Zip"
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
                            label="Rental property state certificate number (if applicable)"
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


                        <FormControlLabel
                            control={(
                                <Switch
                                    checked={true}
                                    color="primary"
                                    value="checkedA"
                                />
                            )}
                            label="Indicate State Certificate Number has been applied for"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id="outlined-full-width"
                            label="Date Rentals began"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <TextField
                            id="outlined-full-width"
                            label="VRBO# or other rental ad ID (please specify)"
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