import {Component} from 'react'

import PostItem from '../PostItem'

import './index.css'

class PostList extends Component {
  state = {
    postList: [],
  }

  componentDidMount = () => {
    this.getPostList()
  }

  getPostList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        this.setState({
          postList: json,
        })
      })
  }

  render() {
    const {postList} = this.state
    return (
      <div className="card-container">
        <h1 className="heading">PostLists</h1>

        <ul className="post-details">
          {postList.map(eachItem => (
            <PostItem
              key={eachItem.id}
              postDetails={eachItem}
              toggleIsComment={this.toggleIsComment}
              deleteItem={this.deleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default PostList
