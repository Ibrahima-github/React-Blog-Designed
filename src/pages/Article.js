import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {

    const [posts, setPosts] = useState({
        data: []
    });
    const {id} = useParams();
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+`posts/${id}`)
            .then((response) => {
                
                   return response.json()
                
                
                
            }    )
            .then(data => {
                //console.log(data);
                setPosts({data: data});
            })
            .catch(error => {
                //console.error(error.message)
            }); 

    }, []);
   

    return(
        
        
        <div className='Article'>
            {posts.map(post=>
            
                <div className="d-flex justify-content-center">
                        <h1 style={{fontSize : 30}}>{post.PostName}</h1>
                        <h2>{post.Category}</h2>

                        <div className="wrap-element">
                            <iframe className="wrapped-iframe" src={post.PostYoutubeHref} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>

                        </div>
                        <p style={{marginTop : 20}}>{post.PostDescription}</p>
                        <p>{post.ArticleUploadDate}</p>   
                         
                        
            </div>
                        )}
        </div>
    )
}
export default Article;