import React from "react";


export function Article({title, uploaded, description, url}){
    return(
        <div className='card-container'>
            <div className='card-body'>
                <div className='image-container'>
                    <div className='card-title'>
                        <h5>{title}</h5>
                    </div>
                    <iframe width="560" height="315" src={url} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                </div>
                    <p>Article écrit le {uploaded}</p>
                <p className='card-text'>{description}</p>
            </div>
        </div>
    )
}