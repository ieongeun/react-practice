import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Videos(){
  const { search } = useParams();
  return (
    <>
      Videos {search}
    </>
  );
}

