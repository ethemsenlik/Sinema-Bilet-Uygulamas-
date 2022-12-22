const container = document.querySelector(".container");
const count = document.querySelector(".count");
const amount = document.querySelector(".amount");
const select = document.querySelector("#movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function (e){
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved"))    // click eventiyle birlikte bir fonksiyon atadık ve bu fonksiyona e parametresi verdik ardından e nin hedefindeki classListte "seat" class ı var mı diye sorduk ve aynı şekilde "reserved" clası var mı diye sorduk ve değilini aldık. contains sorgu komutudur. 
    e.target.classList.toggle("selected");   // toggle bir class ekler ve eğer o class varsa da siler
    calculateTotal();

});

select.addEventListener("change", function (e){   // "change" eventi filmler değiştikçe fiyatı yeniden hesaplar
    calculateTotal();
});

function calculateTotal(){
    const selectedSeats = container.querySelectorAll(".seat.selected");

    const selectSeatsArray = [];
    const seatsArray = [];

    selectedSeats.forEach(function(seat){
        selectSeatsArray.push(seat);
    });

    seats.forEach(function(seat){
        seatsArray.push(seat);
    });

    let selectedSeatIndex = selectSeatsArray.map(function(seat){
        return seatsArray.indexOf(seat);
    })

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndex);
};

//-------------------------------------------------------------------

function saveToLocalStorage (indexs) {
    localStorage.setItem("selectedSeats", JSON.stringify(indexs)); 
    localStorage.setItem("selectedMovieIndex", select.sectedIndex);
};

