import React, { Component, Fragment } from 'react'
import YoutubeComp from '../../../component/YoutubeComponent/YoutubeComp'

class YoutubeCompPage extends Component{
    render(){
        return(
            <Fragment>
                <p>Youtub Component</p>
                <hr/>
                <YoutubeComp
                    time  = '5.00'
                    title = 'Belajar react JS'
                    desc  = 'Bersama channel prawito hudoro'
                />
                <YoutubeComp
                    time  = '9.00'
                    title = 'Belajar react JS 2'
                    desc  = 'Bersama channel prawito hudoro'
                />
                <YoutubeComp
                    time  = '7.00'
                    title = 'Belajar react JS 3'
                    desc  = 'Bersama channel prawito hudoro'
                />
                <YoutubeComp
                    time  = '6.00'
                    title = 'Belajar react JS 4'
                    desc  = 'Bersama channel prawito hudoro'
                />
                <YoutubeComp
                    
                />

            </Fragment>
        )
    }
}

export default YoutubeCompPage;