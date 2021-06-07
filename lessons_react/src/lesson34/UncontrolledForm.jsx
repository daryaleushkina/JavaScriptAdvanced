import React from 'react';

export class UncontrolledForm extends React.Component {
    constructor() {
        super();
        this.state = {
            card:'',
            email: ''
        }
        this.firstNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.cardRef = React.createRef();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.cardRef.current.value.length < 16) {
            alert("Неверный номер карты")
            return
        }
        //send
        this.firstNameRef.current.value=""
        this.emailRef.current.value = ""
        this.cardRef.current.value = ""


    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type='text'
                   name='firstName'
                   placeholder='Введите своё имя'
                   onChange={this.handleChange}
                   ref ={this.firstNameRef}
            />
            <br/>
            <input type='text'
                   name='card'
                   placeholder='Введите номер карты'
                   onChange={this.handleChange}
                   ref = {this.cardRef}
            />
            <br/>
            <input type='email'
                   name='email'
                   placeholder='Введите email'
                   onChange={this.handleChange}
                   ref={this.emailRef}
            />
            <br/>
            <button>Send</button>
        </form>
    }
}