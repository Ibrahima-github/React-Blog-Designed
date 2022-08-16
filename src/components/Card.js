
import React from "react";
import { Button } from "react-bootstrap";
import {  useHistory } from "react-router-dom";


export function Card({title, category,uploaded, description, url, id, adsLink, adsImageFileName}){

    //  const RedirectToArticle =  () => {
    //    return   <Redirect to="/posts/:id" />
    // }
    const history = useHistory();
    return(
    <div  >
        <div className="d-flex justify-content-center block-example border border-dark" id="a
        rticle"  style={{borderRadius:0.5, margin:50}}>

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
                    <div>Catégories: {category}</div>
                    <div >

                        <p className='card-text'>{description}</p><Button style={{height:40, width:40}} className="btn btn-primary" onClick={() =>  history.push(`article/${id}`)} />
                        <p className="border-top">Article uploadé le {uploaded}</p>
                    </div>
                </div>
            </div>
        </div>
            {/* <div id="pub" className="text-center">
                <p>{adsTitle}</p>
                <a href={adsLink} target="blank"><img 
                                    width="275px"
                                    height="200px"
                                    src={adsImageFileName} 
                                    className="rounded"
                                    alt="pub"/>
                </a>
            </div> */}

    </div>        
    )
}

export default Card;
