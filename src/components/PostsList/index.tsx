import {StyledPostsList} from './styles'
import {Post} from '../index'

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