import React from 'react';
import { useParams } from 'react-router-dom';
export default function Videos(){
  const { keyword } = useParams();
  return (
    <>
      Videos {keyword? keyword:'🔥'}
    </>
  );
}