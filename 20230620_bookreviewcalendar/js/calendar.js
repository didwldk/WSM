var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
const datesContainerDiv = document.getElementsByClassName("dates container")[0];

//<: 이전달
//month -= 1;
//>: 이후달
//month += 1;

const setCalendar = (year, month) => {
    //현재 월 제목에 표시하자
    var titleMonthDiv = document.getElementsByClassName("month")[0];
    titleMonthDiv.innerHTML = `${month}월`;

    //해당 월의 마지막 날짜까지 div 만들자
    var thisMonthLastDate = new Date(year, month + 1 -1, 0).getDate(); //2023 10월 전날인 9월 30일
    
    for(let date = 1; date <= thisMonthLastDate; date++){
        let dateItemDiv = document.createElement("div"); //<div></div>
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.innerHTML = date;
        
        datesContainerDiv.appendChild(dateItemDiv);
        console.log(dateItemDiv);
        
    }
    //해당 월의 1일은 무슨 요일인가
    var thisMonthFirstDate = 1;
    var thisMonthFirstDay = new Date(year, month -1).getDay();
    //0: Sun / 1 : Mon / 2: Tue / 3: Wed / 4: Thu / 5: Fri / 6: Sat
    //해당 월이 몇일 까지 있는가
}
setCalendar(year, month);
//받고 생일 넣어야징