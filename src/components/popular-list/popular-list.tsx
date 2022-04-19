import {StyledPopular, StyledPopularBar, StyledPopularList} from './popular-list.styles'
import PopularElement from '../popular-elem/popular-elem'

const PopularList = (props: PopularElementsList) => {
    const popularList = props.popularList
    return(
        <StyledPopular>
            <StyledPopularBar>
                Najpopularniejsze dla Ciebie
            </StyledPopularBar>
            <StyledPopularList>
                {popularList.map((element,index) => {
                        const elemId = `popular_${index}`
                        return <PopularElement key={elemId} {... element} />
                    }
                    )}
            </StyledPopularList>
        </StyledPopular>

    )
}

export default PopularList
