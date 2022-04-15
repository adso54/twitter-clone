import testData from './data.json'

import Sidebar from './components/sidebar/sidebar'
import PostsList from './components/posts-list/posts-list'
import Mainbar from './components/mainbar/mainbar'

import {StyledApp} from './App.styles'

function App() {
  return (
    <StyledApp>
        <Mainbar />       
        <Sidebar />
        <PostsList postsList={testData.posts} />
    </StyledApp>
  );
}

export default App;
