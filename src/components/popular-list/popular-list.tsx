import {StyledPopular, StyledPopularBar, StyledPopularList} from './popular-list.styles'
import PopularElement from '../popular-elem/popular-elem'
import React from 'react'

const PopularList = (props: PopularElementsList) => {
    const popularList = props.popularList

    return(
        <StyledPopular>
            <StyledPopularBar>
                Najpopularniejsze dla Ciebie
            </StyledPopularBar>
            <StyledPopularList>
                {React.useMemo(() => popularList.map((element) => {
                    const elemId = element.titleId
                        return <PopularElement key={elemId} {... element} />
                    }
                    ), [popularList])}
            </StyledPopularList>
        </StyledPopular>
    )
}

export default PopularList
