import React, { useEffect, useReducer, useState } from 'react';
import AppMentor from './AppMentor';
import {useImmer} from 'use-immer';


export default function AppMentors() {
  const [person, updatePerson] = useImmer(initialPerson);
  function handleUpdate(){
    const prev = prompt(`누구의 이름을 바꿀래?`);
    const current = prompt(`뭘로?`);
    updatePerson((person)=>{
      const mentor = person.mentors.find((m)=> m.name === prev);
      mentor.name = current;
    })
  }
  function handleAdd() {
    const name = prompt(`이름은 뭐야?`);
    const title = prompt(`직업은 뭐야?`);
    updatePerson((person)=> {
      person.mentors.push({name, title})
    })
  }
  function hadleDlete() {
    const name = prompt(`누구를 삭제할거야?(이름정확히 입력해줘)`);
    updatePerson((person)=> {
      person.mentors = person.mentors.filter((mentor)=> mentor.name!==name)
    })
  }
  return (
    <div>
      <ul>
        {person.mentors.map((obj)=>(
          <li><AppMentor name={obj.name} title={obj.title}/></li>
        ))}
      </ul>
      <button
        onClick={handleUpdate}
        >
        멘토 이름 바꾸기
      </button>
      <button onClick={handleAdd}>멘토추가</button>
      <button onClick={hadleDlete}>멘토삭제</button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [{
    name: '밥',
    title: '시니어개발자',
  },
  {
    name: '존',
    title: '꿀꿀박사',
  }]
};