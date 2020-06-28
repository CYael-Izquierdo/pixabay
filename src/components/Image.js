import React from "react";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ThumbUpRounded from "@material-ui/icons/ThumbUpRounded"
import Visibility from "@material-ui/icons/Visibility"
import styles from "./Image.module.css"

const Image = ({image}) => {

    const {largeImageURL, likes, previewURL, tags, views} = image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <a
                href={largeImageURL}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={`card ${styles.fill}`}>
                    <img src={previewURL} alt={tags}/>
                    <GridListTileBar
                        title={tags}
                        subtitle={<p>{likes} <ThumbUpRounded/> {views} <Visibility/></p>}
                    />
                </div>
            </a>
        </div>
    );
}

// <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//     <div className="card">
//         <img src={previewURL} alt={tags} className="card-img-top"/>
//     </div>
//     <div className="card-body text-right font-weight-bold px-1">
//         <p className="card-text">{likes} <ThumbUpRounded/> {views} <Visibility/></p>
//     </div>
//     <div className="card-footer">
//
//     </div>
// </div>

export default Image;