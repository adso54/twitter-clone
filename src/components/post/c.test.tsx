import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Post from './index'

test('Rendered MainBar match the snapshot', async () => {
    const testPostData = {
        userImage: "https://picsum.photos/100/100",
        username: "Jan",
        twitterName: "@JanK",
        date: "03/19/2021",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: 25,
        retweets: 20,
        likes: 430,
        postId: "ff8031cc-b4ba-47fd-aaf7-8ef80b379a14"
      }
    const component = render(Post(testPostData))
    expect(component).toMatchSnapshot()
})