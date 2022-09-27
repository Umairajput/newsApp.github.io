if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}
// function showNotification() {
//     Notification.requestPermission((result) => {
//         if (result === "granted") {
//             navigator.serviceWorker.ready.then((registration) => {
//                 registration.showNotification("News App Notification", {
//                     body: "Notification News App",
//                     icon: "./Images/logo.png",
//                     vibrate: [200, 100, 200, 100, 200, 100, 200],
//                     tag: "vibration-sample",
//                 });
//             });
//         }
//     });
// }

// showNotification();

let getDiv = document.getElementById("main_div")
function fetchData(callBack) {
    fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-09-23&sortBy=popularity&apiKey=328d2ddf5e0349b594994bc4a6094819")
        .then((res) => res.json())
        .then((res) => {
            callBack(res);
        })
        .catch((err) => {
            console.log("Error==>", err);
        });
}
function foo(data) {
    console.log(data);
    let array = data.articles
    let newsHTML = ""
    array.forEach(element => {
        let AllNews = `
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
        aria-expanded="true" aria-controls="collapseOne">
        Breaking News
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse hide" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <img class = "image" src = "${element["urlToImage"]}"/>
                    <h2>Author:${element["author"]}</h2>
                    <span><b>Description:</b>${element["description"]}</span><br/>
                    <span style = "margin-left:'50px'"><b>Title:</b>${element["title"]}</span>
                    <a style="text-decoration:none;" href = "${element["url"]}" target="_blank">See More...</a>
                    </div>
                </div>
            </div>
        </div>
                    `
        newsHTML += AllNews
    });
    getDiv.innerHTML = newsHTML
}
fetchData(foo);

let div = document.getElementById("search_div")
function searchData() {
    let getInput = document.getElementById("input").value
    console.log("hello world")
    console.log(getInput)
    getDiv.style.display = "none"
    fetch(`https://newsapi.org/v2/everything?q=${getInput}&apiKey=328d2ddf5e0349b594994bc4a6094819`)
        .then((res) => res.json())
        .then((res) => {
            console.log("searching", res)
            let NewsData = res.articles
            let searchNews = ""
            NewsData.forEach(element => {
                let news = `
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                Breaking News
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse hide" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <img class = "image" src = "${element["urlToImage"]}"/>
                            <h2>Author:${element["author"]}</h2>
                            <span><b>Description:</b>${element["description"]}</span><br/>
                            <span style = "margin-left:'50px'"><b>Title:</b>${element["title"]}</span>
                            <a style="text-decoration:none;" href = "${element["url"]}" target="_blank">See More...</a>
                            </div>
                            </div>
                            </div>
                            </div>
                            `
                searchNews += news
            })
            div.innerHTML = searchNews
        })
}
// {
    // <div class = "div">
    // <div class = "inner_div">
    //     <span>${element["title"]}</span>
    //     <a href = "${element["url"]}" target="_blank">See More...</a>
    // </div>
    //     <div class = "image_div">
    //         <img class = "image" src = "${element["urlToImage"]}"/>
    //     </div>
    // </div>
//     array.map((v,i)=> {
//         let news =  `<p>${v.title}</p>`
//     })
// }
// array.map((v, i) => {
//     let title = v.title
//     console.log(title)
//     getDiv.innerHTML = title
// })
// {
//     let title = v.title
//     console.log(title)
//     getDiv.innerHTML = `array.map((v, i) => {
//         <span>${v[0].title}</span>
//         // getDiv.innerHTML = title
//     })`
// }


// <img src = "${v.link}"/>
//     return data
// })
// data.forEach(function(element)  {
//     console.log(data[title])

// });



// const ApiKey = `23b10080245d4bf8bc1383ba7272ea9f`
// const source = `us`

// const getData = async() => {
//     const url = `https://newsdata.io/api/1/news?apikey=pub_11425d146fec406cca8be874fb7a517310986&q=Geo%20News`
//     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     const response = await fetch(url);
//     const data = await response.json()
//     return showData(data)
// }
// const showData = () => {
//     console.log(data)
// }
// getData()
// getData()https://newsdata.io/api/1/news?apikey=pub_11425d146fec406cca8be874fb7a517310986

// fetch("https://newsdata.io/api/1/news?apikey=pub_11425d146fec406cca8be874fb7a517310986")
// fetch("https://newsdata.io/api/1/news?apikey=pub_11425d146fec406cca8be874fb7a517310986&q=Geo%20News")
//     .then((response) => response.json())
//     .then((data) => console.log(data[0]));

// function fetchData() {
// let data;
// fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-22&sortBy=publishedAt&apiKey=23b10080245d4bf8bc1383ba7272ea9f")
//     .then((res) => res.json())
//     .then((res) => {
//         data = res
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("Error==>", err);
//     });