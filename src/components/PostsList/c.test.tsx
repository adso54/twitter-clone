import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import PostsList from './index'

test('Rendered PostsList match the snapshot', async () => {
    const testPostListData: PostsList = {
        postsList: [
            {
              userImage: "https://picsum.photos/100/100",
              username: "Jan",
              twitterName: "@JanK",
              date: "03/19/2021",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              comments: 25,
              retweets: 20,
              likes: 430,
              postId: "ff8031cc-b4ba-47fd-aaf7-8ef80b379a14"
            },
            {
              userImage: "https://picsum.photos/100/100",
              username: "Anna",
              twitterName: "@AnnaK",
              date: "01/22/2021",
              content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
              comments: 53,
              retweets: 30,
              likes: 230,
              postId: "40f02540-2570-493e-8aee-baefd3587d82"
            }]
    }
    const component = render(PostsList(testPostListData))
    expect(component).toMatchSnapshot()
})