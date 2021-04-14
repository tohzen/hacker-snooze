const body = document.querySelector('body');

const parent = document.createElement('div');
parent.className = 'parent';

const child = document.createElement('div');
child.className = 'child';

const item = document.querySelectorAll(".container-fluid");
const container = document.querySelectorAll('.container-fluid')


parent.appendChild(child);
body.appendChild(parent);


document.addEventListener("DOMContentLoaded", function () {
    
    function getNewsData(){ 
        const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
        fetch(URL)
        .then(response => response.json())
        .then(function(arr){
            arr = arr.slice(0,99);
            arr.forEach(function(num) {
                let storyURL =`https://hacker-news.firebaseio.com/v0/item/${num}.json?print=pretty`
                getNewsStory(storyURL);
                

            })
            
            
        })
        
        
    }
    
    function getNewsStory(storyURL) {
        fetch(storyURL)
        .then((response) => response.json())
        .then(function (storyURL) {
            createList(storyURL)
            console.log(storyURL)
            
            
            
        })
        
        
    }
    
    function createList(story){
        
        let html = `<div class="container-fluid">
        <br>
        <h6 class="title"><a class="glow-on-hover kir" href=${story.url}>${story.title}</a></h6>
        <br>
        <div> 
        ${story.score} points by <a class="glow-on-hover" href="#" > ${story.by} </a> ${Math.floor(Math.random()* 99).toFixed(0)} hours ago |  | 
        <button height="3opx" type="button" class="btn btn-sm  btn-dark position-relative animated-button1">
         comments<span class="position-absolute top-0  translate-middle badge rounded-pill bg-secondary">${Math.floor(Math.random()* 99).toFixed(0)} <span class="visually-hidden">unread messages</span></span>
        </button>
        </div>
        </div>`
        
        body.innerHTML += html;
    }
    
    getNewsData();
    // getNewsStory();
    
})
