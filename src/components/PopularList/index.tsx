import {StyledPopular, StyledPopularBar, StyledPopularList} from './styles'
import {PopularElement} from '../index'
import React from 'react'

const PopularList = (props: PopularElementsList) => {
    const popularList = props.popularList

    return(
        <StyledPopular>
            <StyledPopularBar>
                Najpopularniejsze dla <br/>Ciebie
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
