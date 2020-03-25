var json={'a': 'First', 'b': 'Second', 'c': 'Third'};
function makeUL(json) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < Object.keys(json).length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(Object.values(json)[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of json to #foo:
document.getElementById('foo').appendChild(makeUL(json));
