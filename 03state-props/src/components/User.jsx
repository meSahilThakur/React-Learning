
function User({username, email="thakur@gmail.com"}) {
  return (
    <div style={{backgroundColor:"green"}}>
        <h1>This is user {username}</h1>
        <h2>And my email is {email}</h2>
    </div>
  )
}

export default User