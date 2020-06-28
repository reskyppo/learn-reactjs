import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className = 'youtube-wrapper' >
            <div className = 'img-thumb'>
                <img src       = "https://cdn.akurat.co/images/uploads/images/akurat_20200407102044_8686AU.jpg" alt = ""/>
                <p   className = 'time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time : '5.00',
    title: 'Title here',
    desc : 'Desc Here'
}
export default YoutubeComp;