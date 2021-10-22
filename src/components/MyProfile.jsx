import { useState, useEffect } from "react";


const MyProfile = () => {
  const [currentUser, setcurrentUser] = useState("");
  const [users, setUsers] = useState([]);
  

  const _handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target.fn.value,e.target.ln.value,e.target.un.value,e.target.pw.value,e.target.ea.value,e.target.av.value)

//     fetch('https://api.chatengine.io/users/'+ currentUser, {
//   method: 'PATCH', // or 'PUT'
//   headers: {
//     "PRIVATE-KEY": "055d7411-6711-4c71-91f9-b741c1866e23",
//   },
//   data: {
//       "username":e.target.un.value
//   },
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
  }

  useEffect(() => {
    setTimeout(() => {
      setcurrentUser(localStorage.getItem("username"));
      fetch("https://api.chatengine.io/users/", {
        headers: {
          "PRIVATE-KEY": "055d7411-6711-4c71-91f9-b741c1866e23",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          console.log(data);
        });
    }, 2000);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#184E77", height: "100vh", color: "white" }}
    >
      <div>
        {users.map((user) => {
          if (user.username === currentUser) {
              
            return (
              <div>
                <div className="profile-header" style={{ margin: "5px",}}>
                  <h1>{user.username}</h1>
                  <img
                    className="profile-avatar"
                    src={`${user.avatar}`}
                    alt="avatar"
                  />
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                <form onSubmit={_handleSubmit} >
                    <label htmlFor='fn'>First Name:</label>
                    <input type='text' id='fn' name='fn' defaultValue={`${user.first_name}`}/>
                    <br></br>
                    <label htmlFor='ln'>Last Name:</label>
                    <input type='text' id='ln' name='ln' defaultValue={`${user.last_name}`}/>
                    <br></br>
                    <label htmlFor='un'>Username:</label>
                    <input type='text' id='un' name='un' defaultValue={`${user.username}`} />
                    <br></br>
                    <label htmlFor='pw'>Password:</label>
                    <input type='password' id='pw' name='pw' />
                    <br></br>
                    <label htmlFor='ea'>Email Address:</label>
                    <input type='email' id='ea' name='ea' defaultValue={`${user.email}`}/>
                    <br></br>
                    <label htmlFor='av'>Avatar:</label>
                    <input type='file' id='av' name='av' />
                    <br></br>
                    <br></br>
                    <button type='submit'>Submit Changes</button>
                </form>
                </div>
              </div>
            );
          } else {
            return <div />;
          }
        })}
      </div>
    </div>
  );
};

export default MyProfile;
