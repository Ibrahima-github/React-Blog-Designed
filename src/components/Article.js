import React from "react";


export function Article({title, category,uploaded, description, url, adsTitle, adsLink, adsImageFileName}){
    return(
    <div>
        <div className="d-flex justify-content-center" id="a
        rticle">

            <div className='card-container d-flex justify-content-center'>
                <div className='card-body '>
                    <div className='card-title'>
                        <h5>{title}</h5>
                    </div>
                    <div className='image-container d-flex justify-content-center'>
                        <div className="wrap-element">
                            <iframe className="wrapped-iframe" src={url} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>

                        </div>
                    </div>
                    <div>{category}</div>
                    <div className="border-top">

                        <p>Article uploadée le {uploaded}</p>
                        <p className='card-text'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
            <div id="pub" className="text-center">
                <p>{adsTitle}</p>
                <a href={adsLink} target="blank"><img 
                                    width="275px"
                                    height="200px"
                                    src={adsImageFileName} 
                                    className="rounded"
                                    alt="pub"/>
                </a>
            </div>

    </div>        
    )
}