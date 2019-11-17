var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItem);

// AddItem
function addItem(e){
    // for the normal submission event to not to happen
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;

    // create a new li and add it in 
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // add textnode within input value
    li.appendChild(document.createTextNode(newItem));
    // create the delete button element
    var deleteBtn = document.createElement('button');
    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);
    // append li to list
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');
    // convert htmlcollection to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })

}