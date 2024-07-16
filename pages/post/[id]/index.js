//dynamic routing
import Header from '../../Header'

const Post = ({title, body}) =>{
    return (
        <>
         <Header />
         <h1>{title}</h1>
         <h1>{body}</h1>
        </>
    )
}

Post.getInitialProps =  async({query}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post = res.json();
    return post;
}

export default Post