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
        
        
        <div className="d-flex justify-content-center" key={posts.data.PostId}>
                <div >
                

                        <h1 className="d-flex justify-content-center" style={{fontSize : 50, marginTop:200}}>{posts.data.PostName}</h1>
                        
                    

                        <div className="ratio ratio-16x9 d-flex justify-content-center" style={{margin: 150}}>
                            <iframe  width="560" height="315" src={posts.data.PostYoutubeHref} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>

                        </div>
                        <div className="d-flex justify-content-center" >

                        <div>

                        <p style={{maxWidth: 700}}>{posts.data.PostDescription}</p>

                        <p>Catégorie: {posts.data.Category}</p>
                        <p>Publié le : {posts.data.ArticleUploadDate}</p>   
                        </div>
                        </div>
                         
                        
            </div>
        </div>
    )
}
export default Article;