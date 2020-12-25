const MyComponent = () => { //화살표 함수는 자신이 종속된 인스턴스를 가리킴
    return <div>나의 새롭고 멋진 컴포넌트</div>
}
export default MyComponent;


  //화샇표함수와 일반함수의 비교
  //일반함수
  //일반함수는 자신이 종속된 객체를 this로 가리킴
/*function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function () {
      console.log(this.name + ':멍멍!');
    }
  }
}
const blackDog = new BlackDog();
blackDog.bark();
*/

  //화살표함수
  //화샇표함수는 자신이 종속된 인스턴스를 가리킴
/*
function WhiteDog(){
  this.name = '흰둥이';
  return {
    name : '검둥이';
    bark : () => {
      console.log(this.name + ':멍멍!'); //흰둥이: 멍멍!
    }
  }
}
const whiteDog = new WhiteDog();
whiteDog.bark();
*/

