export default function personReducer(person, action) {
    switch (action.type) {
        case 'update': {
            const {prev, current} = action;
            return({
                ...person, mentors : person.mentors.map(
                (mentor)=> mentor.name===prev? {...mentor,name:current}:mentor
                )
            })
        }
        case 'add':
            const {name, title} = action;
            return({...person ,mentors :[...person.mentors,{name,title}]})
        case 'delete':
            return {...person, mentors : (person.mentors.filter((item)=> item.name!== action.name))}
        default:
            throw Error(`알 수 없는 액션입니다 : ${action.type}`);
    }
}