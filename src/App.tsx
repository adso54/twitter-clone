import testData from './data.json'

import Sidebar from './components/sidebar/sidebar'
import PostsList from './components/posts-list/posts-list'
import Mainbar from './components/mainbar/mainbar'
import PopularList from './components/popular-list/popular-list'

// import {Sidebar} from './components'

import {StyledApp} from './App.styles'

function App() {
  return (
    <StyledApp>
        <Mainbar />       
        <Sidebar />
        <PostsList postsList={testData.posts} />
        <PopularList popularList={testData.popularForYou}/>
    </StyledApp>
  );
}

export default App;
