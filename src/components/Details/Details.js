import React from 'react';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import Main from '../Main/Main';
import './details.css';

const Details = ({ detail }) => {
    const {
        name,
        details,
        links: { patch, youtube_id: youtubeId },
    } = detail;

    let history = useHistory();

    const back = (e) => {
        e.preventDefault();
        history.goBack();
    };
    return (
        <>
            <Main rocketName={name} />
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={patch.small} alt="" />
                        </div>
                        <div className="details-content">
                            <p className="details-description">{details}</p>
                        </div>
                    </div>
                    <div>
                        <YouTube
                            className="details-youtube"
                            width="560"
                            height="315"
                            videoId={youtubeId}
                        />
                    </div>
                </div>
                <a href="/" className="button button-back" onClick={back}>
                    go back
                </a>
            </main>
        </>
    );
};

export default Details;
