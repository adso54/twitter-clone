import {StyledPostsList} from './posts-list.styles'
import Post from '../post/post'

const PostsList = (props: PostsList) => {
    const posts = props.postsList
    return(
        <StyledPostsList>
            {posts.map(post => (
                 <Post {... post} />
            ))}
        </StyledPostsList>
    )
}

export default PostsList