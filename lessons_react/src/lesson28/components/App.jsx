import React, {Component} from 'react';
import {Posts} from './components/Posts';
class App extends Component {
    state = {
        posts: [
            {id: 'abc1', name: 'Darya Leushkina'},
            {id: 'abc2', name: 'Polina Volodina'},
            {id: 'abc3', name: 'Maxim BLinov'},
        ],
    };


    removePost = (id) => {
        this.setState({posts: this.state.posts.filter(post => post.id !== id)})
    }
    render() {
        const {posts} = this.state;
        return (
            <div className="App">
                <Posts posts={posts} removePost={this.removePost}/>
            </div>
        );
    }
}

export default App;


const countStyle = {
    margin: '0 0.75rem',
    display: 'inline-block'
}