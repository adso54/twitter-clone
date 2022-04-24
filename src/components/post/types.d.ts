type Post = {
        userImage: string,
        username: string,
        twitterName: string,
        date: string,
        content: string,
        comments: number,
        retweets: number,
        likes: number,
        postId: string    
}

type PostsList = {
    postsList: Post[]
}

