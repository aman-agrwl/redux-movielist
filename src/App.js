import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import updateMovies from './store/actions/updateMovies';
import fetchUsers from './store/actions/fetchUsers';

function App(props) {
  return (
    <div className="App">
      <h3>REDUX MOVIELIST APP</h3>
      <br/>
       <span style={{color:'green'}}>Your current movie is: {props.movies.name}</span>
       <br/>
       <button onClick={props.updateMovies}>Select Movies</button>
       <br/>
       {props.users.length === 0 ?
       <p>THERE ARE NO USERS</p>:
       props.users.map(user => <p key={user.id}>{user.first_name} -    {user.email}</p>)}
         <br/>
    <button onClick={props.fetchUsers}>FETCH USERS</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    movies: state.movies,
    users: state.users
  }
};

const MapDispatchToProps = (dispatch) => {
  return { 
    updateMovies: ()=> dispatch(updateMovies),
    fetchUsers: ()=> dispatch(fetchUsers)
  }
}

export default connect(mapStateToProps, MapDispatchToProps)(App);
