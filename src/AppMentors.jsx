import React, { useEffect, useState } from 'react';
import AppMentor from './AppMentor';

export default function AppMentors(props) {
  const [person, setPerson] = useState({
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
  });
  return (
    <div>
      <ul>
        {person.mentors.map((obj)=>(
          <li><AppMentor name={obj.name} title={obj.title}/></li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꿀래?`);
          const current = prompt(`뭘로?`);
          setPerson((person)=> ({...person, mentors : person.mentors.map(
            (mentor)=> mentor.name===prev? {...mentor,name:current}:mentor
            )
        })
          )
        }}
        >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
