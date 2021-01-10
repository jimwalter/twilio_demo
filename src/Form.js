import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
}
from '@material-ui/pickers';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            quantity: '',
            datefrom: '',
            dateTo: ''
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);

    }

    handleFormSubmit(event) {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        }
        fetch('http://localhost:3000/api/groceries', options)
            .then(results => results.json())
            .then(data => {
                // console.log('this DATA: ', data)
                this.props.addGroceryItem(this.state);
                this.clearForm();
            })
            .catch(err => console.log(err));
    }


    handleFormChange(event) {
        console.log(event.target.value);
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]: value
        })
    }

    clearForm() {
        this.setState({
            name: '',
            quantity: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label> Name
              <input name="name" onChange={this.handleFormChange} value={this.state.name} />
                    </label>
                    {/* <label> 
              <input name="quantity" onChange={this.handleFormChange} value={this.state.quantity}/>
            </label> */}
                    {/* <button>Add Grocery</button> */}

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Reservation Start"
                            name="start"
                            value={this.state.dateFrom}
                            onChange={this.handleFormChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Reservation End"
                            name="end"
                            value={this.state.dateTo}
                            onChange={this.handleFormChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                            </form>
            </div>
        );
    }
}

export default Form;