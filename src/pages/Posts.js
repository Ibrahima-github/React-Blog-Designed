
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+'posts')
            .then((response) => {
                
                   return response.json()
                
                
                
            }    )
            .then(data => {
                console.log(data);
                setPosts(data.reverse());
            })
            .catch(error => {
                //console.error(error.message)
            }); 

    }, []);
   

    return(


      <div className="container">
           <Header />
        <div className="d-flex justify-content-center">
           

            <div className='Article'>
                
            {posts.map(post=>
            
                        <Card 
                            key={post.PostId}
                            id={post.PostId}
                            title={post.PostName}
                            category={post.Category}
                            uploaded={post.ArticleUploadDate}
                            description={post.PostDescription}
                            url={post.PostYoutubeHref}
                        />
                        )}
            </div>
        </div>
            <Footer />
        </div>
    )
}
export default Posts;