const sports = document.querySelector("#sports")
const health = document.querySelector("#health")
const entertainment = document.querySelector("#entertainment")
const general = document.querySelector("#general")
const science = document.querySelector("#science")
const technology = document.querySelector("#technology")
const business = document.querySelector("#business")
const result = document.querySelector(".news")
const allBtns = document.querySelectorAll("#allBtns")



let category;
let data;
const getData = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=aa9a94a70dc24633b9fa048130e9154a`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data.articles)

    if(data && data.articles){
        result.innerHTML=""
        data.articles.map((article)=>{
            result.innerHTML+=`<div class="news">
            
            <div class="results">
                

                <div class="row">
                    <img src=${article.urlToImage} alt="">
                </div>
                
            </div>
                
            

        
    </div>`
        })
    }
}
getData()

// const generalNews = `https://newsapi.org/v2/top-headlines?country=us&category=${button.value}&apiKey=aa9a94a70dc24633b9fa048130e9154a`

allBtns.forEach((div)=>{
    div.addEventListener("click",(e)=>{
        category = e.target.id
        result.innerHTML=""
        getData()
    })
})




// var body = document.querySelector("body");
// var container = document.querySelectorAll("#contanier");
// console.log(container);
// contanier.forEach((div)=>{
//     div.addEventListener("click",(e)=>{

//         if(e.target.id === "red") body.style.backgroundColor = "red";
//         if(e.target.id === "blue") body.style.backgroundColor = "blue";
//         if(e.target.id === "yellow") body.style.backgroundColor = "yellow";
//         if(e.target.id === "green") body.style.backgroundColor = "green";
//         if(e.target.id === "brown") body.style.backgroundColor = "brown"
//         if(e.target.id === "pink") body.style.backgroundColor = "pink";
//     })
// })
