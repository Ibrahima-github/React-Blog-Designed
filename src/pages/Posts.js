import React, { useEffect, useState } from 'react';
import {Article} from '../components/Article';

export const Posts = () => {

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+'posts')
            .then(response => {
                if(response.status === 200){
                   return response.json()
                }
                throw response;
            }    )
            .then(data => {
                console.log(data);
                setPosts(data.reverse());
            })
            .catch(error => {
                console.error(error.message)
            }); 

    }, []);
   

    return(
        <div className="d-flex justify-content-center">
            Page publications

            <div className='Article'>
            {posts.map(post=>
            
                        <Article 
                            key={post.PostId}
                            title={post.PostName}
                            category={post.Category}
                            uploaded={post.ArticleUploadDate}
                            description={post.PostDescription}
                            url={post.PostYoutubeHref}
                        />
                        )}
            </div>
        </div>
    )
}