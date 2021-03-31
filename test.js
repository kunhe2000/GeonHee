let age = prompt('나이를 입력해주세요.', 18);

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

alert( message );
let userName = prompt("이름을 알려주세요.")
let isTeaWanted = confirm("차 한 잔 드릴까요?")

alert("방문객: " + userName)
alert("차 주문 여부: " + isTeaWanted)
