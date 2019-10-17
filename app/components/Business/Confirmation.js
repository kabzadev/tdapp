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

export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <React.Fragment>
            <PapperBlock title="Confirmation" desc="">
            <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography gutterBottom>DECLARATION: Please note that any person who is required to collect, truthfully account for, and pay any tax and willfully fails to do so shall be liable for penalties under the provisions of Section 213.29, Florida Statute (FS). All information provided by the applicant is confidential as provided in section 213.053 FS and is not subject to Florida Public Records Law, Section 119.07 FS. By providing an e‐mail address above, you consent to electronic communication, reporting and filing. Under penalty of perjury, I declare that I have read the foregoing document and the facts stated are true.
                    </Typography>
                    </Grid>
            </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
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
                            label="Check here to confirm all information provided on this form is accurate and complete"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography gutterBottom>NOTE:Once the Submit Button below is clicked there will not be an opportunity to change data entered on this form. Make sure data entered has been double checked before submitting. You can access each step again from the tabs above before submitting.

                    </Typography>
                    </Grid>
            </Grid>
            </PapperBlock>


        </React.Fragment>
    }
}