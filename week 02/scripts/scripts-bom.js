const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#chaptersList');

addChapter.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    // Creates list item
    const li = document.createElement('li');
    li.textContent = input.value;

    // Creates delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "❌";

   
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus();
    });

    // Append
    li.append(deleteButton);
    list.append(li);


    input.value = '';
    input.focus();
  } else {
    
    input.focus();
  }
});
