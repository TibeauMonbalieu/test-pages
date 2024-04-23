"use strict";

window.addEventListener("load",initialize);

const friendsList = [
    {id:"1",Name:"A",age:"22"},
    {id:"2",Name:"B",age:"25"},
    {id:"3",Name:"C",age:"21"}
];

const jsonFriends = `[
    {"id":"1","Name":"A","age":"22"},
    {"id":"2","Name":"B","age":"25"},
    {"id":"3","Name":"C","age":"21"}
]`;

let slcFriends, inpName, inpAge, inpId;
let friends = [];

function initialize(){ 

    slcFriends = document.getElementById("slc-friends");
    inpName = document.getElementById("name");
    inpAge =  document.getElementById("age");
    inpId = document.getElementById("id");
    friends = JSON.parse(jsonFriends);
    console.log(friends);
    
    
    
    slcFriends.addEventListener("change",fillForm);
    const form = document.forms[0];

    form.addEventListener("submit",createOrReadFriend);

    refreshFriendsList();
    
}

function refreshFriendsList(){
    slcFriends.length = 0;

    for(const friend of friendsList){
        const option = new Option(`${friend.Name} (${friend.age} jaar), ${friend.id}`);
        slcFriends.options[slcFriends.length] = option;

    };
}

function fillForm(){
    const friend = friendsList.find(friend => friend.id == this.id);
    inpName = friend.Name;
    inpAge = friend.age;
    inpId = friend.id;
}

function createOrReadFriend(e){
    e.preventDefault();
}
