import './App.css';
import testData from './data.json'

import Sidebar from './components/sidebar/sidebar'
import Post from './components/post/post'
import PostsList from './components/posts-list/posts-list'
import Mainbar from './components/mainbar/mainbar'

function App() {
  return (
    <div className="App">
        <Mainbar />
        <Sidebar />
        <PostsList postsList={testData.posts} />
    </div>
  );
}

export default App;
