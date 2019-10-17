import React from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { PapperBlock } from 'dan-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography'
import Type from 'dan-styles/Typography.scss';

export default class PriorUsage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <React.Fragment>
            <PapperBlock title="Prior Usage Disclosure" desc="no description">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    checked={false}

                                    value="checkedA"
                                />
                            )}
                            label="Property is newly purchased with no prior historical summary to provide"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    checked={false}

                                    value="checkedA"
                                />
                            )}
                            label="Personal use only, no income derived"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    checked={false}

                                    value="checkedA"
                                />
                            )}
                            label="Previous long term lease, email an attached copy to: tdc@BayCoClerk.com"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    checked={false}

                                    value="checkedA"
                                />
                            )}
                            label="Property was managed by other person/business"
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id="outlined-full-width"
                            label="Property Management Name"
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
                            label="Property Management Phone#"
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
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={(
                                <Checkbox
                                    checked={false}

                                    value="checkedA"
                                />
                            )}
                            label="Property is a self-managed short term rental"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography variant="h6" className={Type.light} gutterBottom>
                        Income Summary             
                    </Typography>
                    
                    <Typography gutterBottom>
                    PLEASE READ INSTRUCTIONS CAREFULLY: For Self-managed properties, 3 full calendar years plus year to date current year rental disclosure is required. Taxable rentals include but are not limited to nightly, weekly, monthly rates, cleaning fees, resort and reservation fees, damage waiver fees, Panama City and Panama City Beach license fee and any other fee the guest is required to pay to stay in the unit. All rentals including but not limited to those secured through VRBO, AirBnB, Trip Advisor and the like are required to be disclosed.
          </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Currently year through"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Previous Year"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Previous Year"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Previous Year"
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
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Income for above year"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Income for above year"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Income for above year"
                        style={{ margin: 8 }}


                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField
                        id="outlined-full-width"
                        label="Income for above year"
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