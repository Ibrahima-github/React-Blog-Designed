<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {Article} from '../components/Article';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+'posts',  {mode : 'no-cors'})
            .then(response => {
                
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
        <div className="d-flex justify-content-center">
           

            <div className='Article'>
            {posts.map(post=>
            
                        <Article 
                            key={post.PostId}
                            title={post.PostName}
                            category={post.Category}
                            uploaded={post.ArticleUploadDate}
                            description={post.PostDescription}
                            url={post.PostYoutubeHref}
                            adsTitle={post.AdsTitle}
                            adsImageFileName={post.AdsImageFileName}
                            adsLink={post.AdsLink}
                        />
                        )}
            </div>
        </div>
    )
}
=======
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
        <div className="d-flex justify-content-center">
           
           <Header />

            <div className='Article'>
                
            {posts.map(post=>
            
                        <Card 
                            key={post.PostId}
                            title={post.PostName}
                            category={post.Category}
                            uploaded={post.ArticleUploadDate}
                            description={post.PostDescription}
                            url={post.PostYoutubeHref}
                        />
                        )}
            </div>
            <Footer />
        </div>
    )
}
>>>>>>> 8468cce97e92334e39c84f263eed2fff5e19f51e
export default Posts;