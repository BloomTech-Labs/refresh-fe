import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserCard from './user-card';

const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const Body = styled.div`
display: flex;    
padding-left: 70px;
`

const UserList = props => {
    const [users, setUsers] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
        axios.get('https://labs-refresh.herokuapp.com/users/')
            .then((response) => {
                const usersInfo = response.data;
                setUsers(usersInfo);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        console.log('SearchTerm.length', searchTerm.length)
        if(users) {
            const results = users.filter(user =>                
                    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(results);
        }
    }, [searchTerm, users]);



    const changeHandler = event => {
        event.preventDefault();
        console.log('searchTerm: ', event.target.value)
        setSearchTerm(event.target.value);
    };

    if(users === undefined) { return <h1>Loading</h1> }
    
    const filteredUsers = users.filter(employees => {
        if(searchTerm === null) {
            return employees
        } else if(employees.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || employees.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return employees
        }
    }).map(employees => {
        return (
            <div>
                <div key={employees.id}>
                    <UserCard info={employees} />
                </div>
            </div>
        )
    })

    return (
        <div>
            <Body>
            <h1>Users Profiles</h1>
                <form>
                    <input
                    id="search"
                    type="text"
                    name="searchBar"
                    placeholder="Search"
                    onChange={changeHandler}
                    value={searchTerm}
                    />
            </form>
            <List>
                {filteredUsers}
            </List>
            </Body>
        </div>
    )
}



export default UserList;











// var listRender;
// if (searchTerm.length === 0) {
// listRender = (
//     <section>
//     {props.restData.map(restaurant => {
//         return (
//         <ListDivs>
//             <Link to={`/restaurantcard/${restaurant.id}`}>
//             <div>
//                 <h2 className="list-link-h2">{restaurant.name}</h2>
//                 <p>City: {restaurant.city}</p>
//                 <p>Zip Code: {restaurant.zip_code}</p>
//             </div>
//             </Link>
//         </ListDivs>
//         );
//     })}
//     </section>
// );
// } else {
// listRender = (
//     <section className="search-form">
//     {searchResults.map(restaurants => {
//         return (
//         <ListDivs>
//             <ListLinks href={`/restaurants/${restaurants.id}`}>
//             <div>
//                 <h2>{restaurants.name}</h2>
//                 <p>City: {restaurants.city}</p>
//                 <p>Zip Code: {restaurants.zip_code}</p>
//             </div>
//             </ListLinks>
//         </ListDivs>
//         );
//     })}
//     </section>
// );
// }
// return (
// <div>
//     <img src={background} alt="background" className="list_background" />
//     <NavBar />
//     <Link to="/addrestform">
//     <Button>Add Restaurant</Button>
//     </Link>
//     <Form>
//     <Input
//         id="search"
//         type="text"
//         name="searchBar"
//         placeholder="Search"
//         onChange={changeHandler}
//         value={searchTerm}
//     />
//     </Form>

//     <section>{listRender}</section>
// </div>