import styled from 'styled-components'
import React from 'react'

const StyledPost = styled.div``

const StyledImage = styled.image``

const StyledNameBar = styled.div``

const StyledName = styled.div``

const StyledTwitterName = styled.div``

const StyledDate = styled.div``

const StyledContent = styled.div``

const StyledBottomBar = styled.div``

const StyledBottomBarElement = styled.div``


const Post = (props: Post) => {
    const { userImage, username, twitterName, date, content, comments, retweets, likes, postId} = props.postData

    return(
        <StyledPost>
            <StyledImage>
                <img src={userImage} alt={twitterName} />
            </StyledImage>
            <StyledNameBar>
                <StyledName></StyledName>
                <StyledTwitterName></StyledTwitterName>
                <StyledDate></StyledDate>
            </StyledNameBar>
            <StyledContent>{content}</StyledContent>
            <StyledBottomBar>
                <StyledBottomBarElement></StyledBottomBarElement>
                <StyledBottomBarElement></StyledBottomBarElement>
                <StyledBottomBarElement></StyledBottomBarElement>
                <StyledBottomBarElement></StyledBottomBarElement>
            </StyledBottomBar>
        </StyledPost>
    )
}

export default Post