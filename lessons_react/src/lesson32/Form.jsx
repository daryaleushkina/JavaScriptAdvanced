import React from 'react';

export class Form extends React.Component {
    state = {
        email: '',
        isAgreeWithTerms:''
    }

    validateEmail = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test
        (this.state.email.toLowerCase())) {
            alert("Your email address not valid")
            return false
        }
        else return true
    }
    validateCheckbox = () => {
        if (!this.state.isAgreeWithTerms)
            alert("Необходимо принять все условия")
        return this.state.isAgreeWithTerms
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]:event.target.checked})
    }
    handleSubmit = (event) => {
        if (this.validateEmail() && this.validateCheckbox()) {
            alert("Поздравляю, вы подписались на рассылку")
            this.clearForm()
        }
    }
    clearForm = () => {
        this.setState({email: "", isAgreeWithTerms:""})
    }
    render() {
        const {email,isAgreeWithTerms} = this.state;


        return <div className="form-group">
            <input type='email'
                   name='email'
                   placeholder='Введите email'
                   value={email}
                   onChange={this.handleChange}
            />
            <br/>
            <label>
                <input type='checkbox'
                       name='isAgreeWithTerms'
                       onChange={this.handleCheckboxChange}
                       checked={isAgreeWithTerms}
                />
                I agree with terms and conditions
            </label>

            <br/>
            <button type='submit'
                    onClick={this.handleSubmit}
            > Send
            </button>

        </div>


    }
}