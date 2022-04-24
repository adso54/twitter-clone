import {StyledPost, StyledImage, StyledNameBar, StyledName, StyledTwitterName, StyledDate, StyledContent, StyledBottomBar, StyledBottomBarElement, StyledBody} from './post.styles'
import { CommentIcon, ShareIcon, HeartIcon, DownloadIcon } from '../../assets/images/index'

const Post = ({ userImage, username, twitterName, date, content, comments, retweets, likes, postId}: Post) => {

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