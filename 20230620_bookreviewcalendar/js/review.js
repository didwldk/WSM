//URL book에 해당하는 parameter 값 읽어보자
let book = new URL(location.href).searchParams.get('book');
console.log(`book : ${book} type: ${typeof book}`);//"3" String

//book값(String) -> bookId(number) 변환
//let bookId = Number(book);  둘 중 하나 사
let bookId = parseInt(book);
console.log(`bookId : ${bookId} type: ${typeof bookId}`);
//book이 null이면 책장으로 이동
if(book === null){
    location.href = 'index.html';
}

//책 정보 > books에 있음 , books를 돌면서 bookId(number)와 같은 id값의 책을 가져오기
let bookData;
for(let bookOne of books){
    if(bookId === bookOne.id){// === : 값이랑 자료형이랑 둘다 동일 시 작동
        bookData = bookOne;
        break;
    }
}

//제목 출력
let title = bookData.title;
console.log(title);
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}"/>`; //띄어쓰기 때문에 따옴표를 붙여서 출력

//html 요소 -> js 변수로 가져오기
const titleDiv = document.getElementsByClassName("title")[1];
//js 변수.innerHTML();
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

//읽은 날짜: 임시로 오늘의 날짜 표시
let now = new Date();
//오늘의 날짜 구하기
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
//사람이 알 수 있게 변경
let dateString = `${year}년 ${month}월 ${date}일`;
//html -> js
const readDateDiv = document.getElementsByClassName("read-date")[1];
//값 삽입
readDateDiv.innerHTML = dateString;