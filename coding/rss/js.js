function getDate(){
    const date = new Date();
    document.getElementById("date").innerHTML = date.toDateString();
}

let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
const textarea = document.querySelector("#feed > ul");

feednami.load(url)
.then(feed => {
  textarea.value = ''
  for(let entry of feed.entries){
      let li = document.createElement('li');
      li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
      textarea.appendChild(li);
  }
});
