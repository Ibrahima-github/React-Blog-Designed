import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {

    //const {title, category, uploaded, description, url} = props
    
    const {id} = useParams();
    const [posts, setPosts] = useState({
        data: []
    });
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API+`posts/${id}`)
            .then(response => {
                
                   return response.json()
                
                
                
            }    )
            .then(data => {
                //console.log(data);
                setPosts({data: data});
            })
            .catch(error => {
                console.error(error.message)
            }); 

    }, []);
   

    return(
        
        
        <div className='Article' key={posts.data.PostId}>
                <div className="d-flex justify-content-center">
                        <h1 style={{fontSize : 30}}>{posts.data.PostName}</h1>
                        <h2>{posts.data.Category}</h2>

                        <div className="wrap-element">
                            <iframe className="wrapped-iframe" src={posts.data.PostYoutubeHref} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>

                        </div>
                        <p style={{marginTop : 20}}>{posts.data.PostDescription}</p>
                        <p>{posts.data.ArticleUploadDate}</p>   
                         
                        
            </div>
        </div>
    )
}
export default Article;