import {StyledPopularElement, StyledHeader, StyledName, StyledTweets} from './popular-elem.styles'


const PopularElement = (props: PopularElement) => {
    const {header,name, tweets} = props;
    return(
        <StyledPopularElement>
            <StyledHeader>{header}</StyledHeader>
            <StyledName>{name}</StyledName>
            {tweets ? <StyledTweets>{tweets}</StyledTweets>: null}
        </StyledPopularElement>
    )
}


export default PopularElement