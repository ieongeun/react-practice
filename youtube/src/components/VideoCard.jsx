import React, { useEffect, useReducer, useState } from 'react';
export default function VideoCard({video}){
  return (
    <>
      {video.snippet.title}<br></br>
    </>
  );
}
