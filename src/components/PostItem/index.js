import './index.css'
import EditComment from '../EditComment'

const PostItem = props => {
  const {postDetails} = props
  const {userId, title, body} = postDetails

  return (
    <div className="post-container">
      <ul className="post">
        <li className="post-item">{userId}</li>
        <li className="title">{title}</li>
        <li className="body">{body}</li>
      </ul>
      <p className="comment" onClick={<EditComment />}>
        Comment
      </p>
    </div>
  )
}
export default PostItem
