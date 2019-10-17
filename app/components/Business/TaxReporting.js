import React from "react"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { PapperBlock } from 'dan-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography'
import Type from 'dan-styles/Typography.scss';
import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch';

export default class TaxReporting extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <React.Fragment>
            <PapperBlock title="Tax Reporting Agent" desc="Per FS 213.053 taxpayer information is held strictly confidential. If you desire to designate anyone other than the owner to communicate with this office concerning the rentals and taxes please indicate below.">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={(
                                <Switch
                                    checked={true}
                                    color="primary"
                                    value="checkedA"
                                />
                            )}
                            label="Are you using a Tax reporting Agent?"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={4}>
                        <FormControlLabel
                            control={(
                                <Switch
                                    checked={true}
                                    color="primary"
                                    value="checkedA"
                                />
                            )}
                            label="Send all correspondence to Agent?"
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            id="outlined-full-width"
                            label="Agent Name"
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
                            label="Agent Phone#"
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
                    
                    <Grid item xs={4}>
                        <TextField
                            id="outlined-full-width"
                            label="Agent Email"
                            style={{ margin: 8 }}


                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={8} >
                        <TextField
                            id="outlined-full-width"
                            label="Agent Full Address"
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