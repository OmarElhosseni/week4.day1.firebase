const database = firebase.database().ref();
const authorF = document.getElementById('author');
const titleF = document.getElementById('title');
const contentF =  document.getElementById('content')

if(document.getElementById('submitButton')) {
const buttonS = document.getElementById('submitButton');
buttonS.addEventListener('click', updateDB)
}
//put post onto
function updateDB(event){
    // event.preventDefault();
    const author = authorF.value;
    const title  = titleF.value;
    const content = contentF.value;

    //Update database here
    const post = {
      AUTHOR: author,
      TITLE: title,
      CONTENT: content
    };
    database.push(post);

}



// Set database "child_added" event listener here
database.on('child_added', function(rowData){
  const data = rowData.val();
  const newDiv = document.createElement('div');

  const author = document.createElement('h1');
  author.innerText = data.AUTHOR;

  const heading = document.createElement('h2');
  heading.innerText = data.TITLE;

  const post = document.createElement('P');
  post.innerText = data.CONTENT;
  console.log(data.CONTENT);


  newDiv.appendChild(author);
  newDiv.appendChild(heading);
  newDiv.appendChild(post);

  const bodyM = document.getElementById('bodyM');
  bodyM.appendChild(newDiv);

})
