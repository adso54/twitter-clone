import {StyledPost, StyledImage, StyledNameBar, StyledName, StyledTwitterName, StyledDate, StyledContent, StyledBottomBar, StyledBottomBarElement, StyledBody} from './post.styles'
import {ReactComponent as CommentIcon} from '../../assets/images/comment.svg'
import {ReactComponent as ShareIcon} from '../../assets/images/share.svg'
import {ReactComponent as HeartIcon} from '../../assets/images/heart.svg'
import {ReactComponent as DownloadIcon} from '../../assets/images/download.svg'

const Post = (props: Post) => {
    const { userImage, username, twitterName, date, content, comments, retweets, likes, postId} = props

    return(
        <StyledPost id={postId}>
            <StyledImage>
                <img src={userImage} alt={twitterName} />
            </StyledImage>
            <StyledBody>
                <StyledNameBar>
                    <StyledName>{username}</StyledName>
                    <StyledTwitterName>{twitterName}</StyledTwitterName>
                    <StyledDate>{date}</StyledDate>
                </StyledNameBar>
                <StyledContent>{content}</StyledContent>
                <StyledBottomBar>
                    <StyledBottomBarElement>
                        <CommentIcon />
                        <div>{comments}</div>
                    </StyledBottomBarElement>
                    <StyledBottomBarElement>
                        <ShareIcon />
                        <div>{retweets}</div>
                    </StyledBottomBarElement>
                    <StyledBottomBarElement>
                        <HeartIcon />
                        <div>{likes}</div>
                    </StyledBottomBarElement>
                    <StyledBottomBarElement>
                        <DownloadIcon />
                    </StyledBottomBarElement>
                </StyledBottomBar>
            </StyledBody>
        </StyledPost>
    )
}

export default Post