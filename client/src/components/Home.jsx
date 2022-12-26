import React from "react";
import Navbar from '../components/Navbar'
import Card from './Card'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getallpeople} from '../redux/actions/index';
import './styles/homecard.css'


export default function Home (){
  const dispatch = useDispatch();
  const people = useSelector((state) => state.allpeople);
  
  useEffect(() =>{
    dispatch(getallpeople());
  }, [dispatch])

  function handleclick(e){
    e.preventDefault();
    dispatch(getallpeople());
  }
    return (
     <div>
        <div><Navbar/></div>
      <label className="names">MISSING PEOLE</label>{/* 
      <button onClick={e => {handleclick(e)}}>REFRESH</button>

      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div> */}
      <div className="cartitas">    {people?.map((e)=>{
return (

<Card
name={e.name}
surname={e.surname}
photo={e.photo}
country={e.country}
age={e.age}
height={e.height}

/>
    );})}</div>

                </div>
    )
}