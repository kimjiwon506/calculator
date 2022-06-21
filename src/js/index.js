let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
// 공통으로 뺄 수 있는것 빼기
// const onClickNumber = (number) => {
//   return () => {
//     if(operator){ // 비어있지 않다
//       numTwo += number;
//     } else {
//       numOne += number; // 비어있다
//     }
//     // result에 value값 넣어주기(화면에 보여지도록) 변수값을 바꾸었을땐 변수값 보여지도록
//     $result.value += number;
//   }
// }

// 고차함수로 변경 return 생략
// const onClickNumber = (number) => () => {
//     if(operator){ // 비어있지 않다
//       numTwo += number;
//     } else {
//       numOne += number; // 비어있다
//     }
//     // result에 value값 넣어주기(화면에 보여지도록) 변수값을 바꾸었을땐 변수값 보여지도록
//     $result.value += number;
// }

//7. onClickNumberEvent e.target.textContent이용해서 만들어 줄 수도 있다.
const onClickNumberEvent = (e) => {
  if (operator) {
    if (!numTwo) {
      $result.value = "";
    }
    numTwo += e.target.textContent;
  } else {
    numOne += e.target.textContent;
  }
  $result.value += e.target.textContent;
};

// num-0을 누르면
// document.querySelector('#num-0').addEventListener("click", () => {
//   //+를 안누르면 numOne = 0 누르면 numTwo에 적용되도록
//   if(operator){ // 비어있지 않다
//     numTwo += '0';
//   } else {
//     numOne += '0'; // 비어있다
//   }
//   // result에 value값 넣어주기(화면에 보여지도록) 변수값을 바꾸었을땐 변수값 보여지도록
//   $result.value += '0';
//   console.log($result.value);
// });
// document.querySelector('#num-1').addEventListener("click", () => {
//   //+를 안누르면 numOne = 0 누르면 numTwo에 적용되도록
//   if(operator){ // 비어있지 않다
//     numTwo += '1';
//   } else {
//     numOne += '1'; // 비어있다
//   }
//   $result.value += '1';
//   console.log($result.value);
// });
//중복되는 부분은 매개변수로 만들어준다 (숫자부분 공통)

//2.중복되는 부분 매개변수로 만들어주기
// document.querySelector('#num-0').addEventListener("click", (number) => {
//   //+를 안누르면 numOne = 0 누르면 numTwo에 적용되도록
//   if(operator){ // 비어있지 않다
//     numTwo += number;
//   } else {
//     numOne += number; // 비어있다
//   }
//   // result에 value값 넣어주기(화면에 보여지도록) 변수값을 바꾸었을땐 변수값 보여지도록
//   $result.value += number;
//   console.log($result.value);
// });

//3. 중복되는 부분을 넣어주었다면 변수로 뺀다.
// const onClickNumber = (number) => {
//   if(operator){ // 비어있지 않다
//     numTwo += number;
//   } else {
//     numOne += number; // 비어있다
//   }
//   // result에 value값 넣어주기(화면에 보여지도록) 변수값을 바꾸었을땐 변수값 보여지도록
//   $result.value += number;
// }
// 제일 상단에 공통으로 빼줌

// 4.적용시켜준다.
//document.querySelector('#num-0').addEventListener("click", onClickNumber(0));

//5. 생각과는 다르게 에러가 발생한다. 왜냐하면 onClickNumber(0)의 ()안에는 함수가 들어가야 하는데
//document.querySelector('#num-0').addEventListener("click", onClickNumber(0));
//return undefind를 넣어주고 있기때문이다. 항상 return은 undefined를 내뱉는다.
//
// const onClickNumber = (number) => {
//   if(operator){ // 비어있지 않다
//     numTwo += number;
//   } else {
//     numOne += number; // 비어있다
//   }
//   // result에 value값 넣어주기(화면에 보여지도록) 변수값을 바꾸었을땐 변수값 보여지도록
//   $result.value += number;
// }

//return으로 감싸준 후 함수를 넣어준다.
// const onClickNumber = (number) => {
//   return () => {
//     if(operator){ // 비어있지 않다
//       numTwo += number;
//     } else {
//       numOne += number; // 비어있다
//     }
//     // result에 value값 넣어주기(화면에 보여지도록) 변수값을 바꾸었을땐 변수값 보여지도록
//     $result.value += number;
//   }
// }

//6.
//document.querySelector('#num-0').addEventListener("click", onClickNumber(0));

//7. 이벤트 타겟 이용해서 변형하기
document.querySelector("#num-0").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-1").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-2").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-3").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-4").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-5").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-6").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-7").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-8").addEventListener("click", onClickNumberEvent);
document.querySelector("#num-9").addEventListener("click", onClickNumberEvent);
//document.querySelector('#num-0').addEventListener("click", onClickNumberEvent);
//자바스크립트는 onClickNumberEvent 부를때 event를 같이 부르기때문에

const onClickOperator = (op) => () => {
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력하세요");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*"));

document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = parseInt(numOne) - parseInt(numTwo);
        break;
      case "/":
        $result.value = parseInt(numOne) / parseInt(numTwo);
        break;
      case "*":
        $result.value = parseInt(numOne) * parseInt(numTwo);
        break;
    }
  } else {
    alert('숫자를 먼저 입력하세요');
  }
});


//초기화
document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
