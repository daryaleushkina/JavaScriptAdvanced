import React from 'react';
export class  FormWithRef extends React.Component {
    constructor() {
        super();
        this.state = {
            card:'',
            email: ''
        }
        this.firstNameRef = React.createRef();
        this.emailRef = React.createRef();
    }
    state = {
        firstName: '',
        email:''
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value}, () => {
          if  (this.state.card.length === 16) {
              this.emailRef.current.focus();
          }
        })
    }
    componentDidMount() {
        console.log(this.firstNameRef)
        this.firstNameRef.current.focus();
    }


    render() {
        const {firstName, email} = this.state

        return <div>
            <input type='text'
                   name='firstName'
                   placeholder='Введите своё имя'
                   value={firstName}
                   onChange={this.handleChange}
                   ref ={this.firstNameRef}
            />
            <br/>
            <input type='text'
                   name='card'
                   placeholder='Введите номер карты'
                   value={this.state.card}
                   onChange={this.handleChange}
            />
            <br/>
            <input type='email'
                   name='email'
                   placeholder='Введите email'
                   value={email}
                   onChange={this.handleChange}
                   ref={this.emailRef}
            />

        </div>
    }
}