console.log("this is mynews")
// 95dc143b0a204f69b09a9100c1a487c2
let source = 'bbc-news';
let apiKey = '95dc143b0a204f69b09a9100c1a487c2';

let accordionPanelsStayOpenExample = document.getElementById('accordionPanelsStayOpenExample');
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?sources=${source}&apikey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml = "";
        console.log(articles);
        articles.forEach(function (element, index) {

            let news = `<div class="accordion-item my-4 ">
                                <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${index}">
                                    <b class="text-success">BREAKING NEWS:${index+1}</b> <h2 class="titleTxt"> ${element["title"]}</h2>
                                    </button>
                                </h2>
                                
                                <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-heading${index}">
                                    <div class="accordion-body ">  ${element["content"]}. <a href="${element['url']}" target="_blank"> Read More </a>
                                    </div>
                                </div>
                        </div>`;
            newshtml += news;
        });
        accordionPanelsStayOpenExample.innerHTML = newshtml;
    }
    else {
        console.log("some error occured ");
    }
}
xhr.send();


//for searching news
 let search =document.getElementById('searchNews');
 search.addEventListener('input',function()
 {
     let inputval=search.value.toLowerCase();
    //  console.log('input event fired',inputval);
      let showNews =document.getElementsByClassName('accordion-item');
      Array.from(showNews).forEach(function(element){
          let text =element.getElementsByClassName('titleTxt')[0].innerText;
          if(text.includes(inputval))
          {
              element.style.display="block";
          }
          else{
            element.style.display="none";
          }

      })
 })

