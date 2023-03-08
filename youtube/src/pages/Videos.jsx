import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
export default function Videos(){
  const { keyword } = useParams();
  const {isLoading, error, data: videos} = useQuery(
    ['videos', keyword], async () => {
      return fetch(`/data/${keyword? 'search':'most_popular_videos'}.json`)
      .then(res => res.json())
      .then((data) => data.items);
    }
  )
  return (
    <>
      Videos {keyword? keyword:'🔥'}
      {isLoading && <p>로딩중</p>}
      {error && <p>에러</p>}
      {videos && <ul>
        {videos.map((v)=> <VideoCard key={v.id} video={v}></VideoCard>)}
        </ul>}
    </>
  );
}