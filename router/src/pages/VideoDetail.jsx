import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function VideoDetail(){
    const { videoId } = useParams();
    console.log(videoId);
    return (
        <>
        VideoDetail {videoId}
        </>
    );
}
