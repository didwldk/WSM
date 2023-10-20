var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
const datesContainerDiv = document.getElementsByClassName("dates container")[0];


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
        
    }
    
    //1일을 해당 요일로 이동하자
    let firstDateDiv = datesContainerDiv.querySelector(".date.item:nth-child(1)");
    //css: date.item:nth-child(1) {grid-column-start: 6}
    
    //1일의 요일 구하자 year, month -> month 1일의 요일
    let firstDateDay = new Date(year, month -1, 1).getDay();
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;
    
    //토요일 파란색으로
    let saturdayFirstDate = 7 - firstDateDay;
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate})`);
    for(let saturdayDiv of saturdayDivs){
        saturdayDiv.style.color = "blue";
    }
    
    //일요일 빨간색으로
    let sundayFirstDate = 8 - firstDateDay;
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for(let sundayDiv of sundayDivs){
        sundayDiv.style.color = "red";
    }
    
    // //해당 월의 1일은 무슨 요일인가
    // var thisMonthFirstDate = 1;
    // var thisMonthFirstDay = new Date(year, month -1).getDay();
    // //0: Sun / 1 : Mon / 2: Tue / 3: Wed / 4: Thu / 5: Fri / 6: Sat
    // //해당 월이 몇일 까지 있는가
}

setCalendar(year, month);
//<: 이전달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    let prevMonth = new Date(year, month-1)
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth()+1;
    setCalendar(year, month)
    //자동
};
//leftDiv.addEventListener("click", () => console.log("이전달"));


//>: 이후달
let rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month == 13){
        year++;
        month = 1;
    }
    setCalendar(year, month)
    //수동
};
//받고 생일 넣어야징