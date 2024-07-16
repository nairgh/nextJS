//import React from 'react'

function Dashboard({name,bio,blog,location}) {
    return (
        <div>
            <h1>{name}</h1>;
            <p>{`Bio: ${bio}`}</p>;
            <p>{`Blog: ${blog}`}</p>;
            <p>{`Location: ${location}`}</p>;
        </div>
    )
}
Dashboard.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/leerob')
    const user = await res.json();
    return user;
};

export default Dashboard
