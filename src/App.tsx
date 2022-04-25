import testData from './data.json'

import {Sidebar, PostsList, Mainbar, PopularList} from './components/index'
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
