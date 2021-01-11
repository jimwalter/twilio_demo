import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            quantity: '',
            dateFrom: 'yyyy-MM-dd',
            dateTo: 'yyyy-MM-dd'
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleDateSelect = this.handleDateSelect.bind(this);
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
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]: value
        })
    }

    handleDateSelect(event) {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]: value
        }, () => console.log('STATE', this.state))
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
                <h2>
                    Enter your reservation details:
                </h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label> Name</label>
                    <input name="name" onChange={this.handleFormChange} value={this.state.name} />
                    <label htmlFor="start">Start date:</label>
                    <input
                        type="date"
                        id="start"
                        name="dateFrom"
                        value={this.state.dateFrom}
                        min="2021-01-13"
                        max="2022-01-13"
                        onChange={this.handleDateSelect}
                    />
                    <label htmlFor="End">End date:</label>
                    <input
                        type="date"
                        id="End"
                        name="dateTo"
                        value={this.state.dateTo}
                        min="2021-01-13"
                        max="2022-01-13"
                        onChange={this.handleDateSelect}
                    />
                    <button>Make Reservation</button>
                </form>
            </div>
        );
    }
}

export default Form;