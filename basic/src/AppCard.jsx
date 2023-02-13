// 구조분해할당으로 color를 바로 접근할 수 있게하자 
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};
 
const {name,styles:{color}} = prop;
console.log(color);