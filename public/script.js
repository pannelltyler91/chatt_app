console.log("Hi the script is working");

const chatsContainer = document.getElementsByClassName("ce-chats-container");

const profileContainer = `<div className='profile-container'>
<h1>My Profile</h1>
<div><h3>Update My Information</h3></div>
<div><h3>Logout</h3></div>
</div>`;

chatsContainer.append(profileContainer)