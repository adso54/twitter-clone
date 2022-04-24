import testData from './data.json'

import Sidebar from './components/sidebar'
import PostsList from './components/posts-list'
import Mainbar from './components/mainbar/index'
import PopularList from './components/popular-list'

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
