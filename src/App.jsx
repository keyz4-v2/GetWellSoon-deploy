import  { useState } from 'react'
import './App.css'
import React from 'react'
import video from './assets/hey.mp4'
import styled from 'styled-components'


function App() {
  const [color, setColor] = useState("VIOLET")
  const [border, setBorder] = useState("WHITE")
  const [text, setText] = useState("Hey, love")
  const [visibile, setVisible] = useState(false)
  const StyleC = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 50%;
    width: 60%;
    border-radius: 15px;
    border: 2px solid white;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: 'Dancing Script', cursive;
    color: white;
    text-wrap: wrap;
    text-align: center;
    padding: 10px;
    @media (max-width : 600px){
      width : 90%;
      font-size : 1.6rem;
    }
  `;

  return (
    <>
      <div className="pg1" style={{backgroundColor:color}}>
      
      <div className="container1" style={{borderColor: border, color : border}}>
        <button className="btn" id='black' onClick={()=>{
            setColor("BLACK")
            setBorder("WHITE")
            setText(`I know how hard the past few days have been for you`)
            setVisible(false)
          }}>BLACK</button>
          <button className="btn" id='green' onClick={()=>{
            setColor("GREEN")
            setBorder("WHITE")
            setText(`And we have all seen how stong you have been for yourself and for all of us`)
            setVisible(false)
            }}>GREEN</button>
          <button className="btn" id='blue' onClick={()=>{
            setColor("BLUE")
            setBorder("WHITE")
            setText(`I'm really "PROUD" of you`)
            setVisible(false)
          }}>BLUE</button>
          
          <button className="btn" id='orange' onClick={()=>{
            setColor("ORANGE")
            setBorder("BLACK")
            setText(`I pray tm ekdm jaldi se thik ho jao puri tareh and bhag ke aa jao mere paas cuz Ashu....................... I MISS YOU A LOTTTT!!!!!!!!!!!`)
            setVisible(false)
          }}>ORANGE</button>
          <button className="btn" style={{borderColor: border, color : border}} id='yellow' onClick={()=>{
            setColor("YELLOW")
            setBorder("BLACK")
            setText(`But vo sab choro, 1 week ho gaya h operation ko, n abb toh ekdm fit bhi ho tm, i think Its TIME❤️ we celebrated right?`)
            setVisible(true)
          }} >YELLOW</button>
          <button className="btn" id='red' onClick={()=>{
            setColor("RED")
            setBorder("WHITE")
            setText(`I 💗 YOU`)
            setVisible(false)
          }}>RED</button>
      </div>
      <div className="container2">
        <StyleC className="clrName" style={{borderColor: border, color : border}}>
          <div className="txt">{text}</div>
        </StyleC>
        {
            visibile && <div style={{display: "flex", justifyContent: "center", alignItems:"center", backgroundColor : "grey", borderRadius : "25px", height : "3rem"}} >
              <div style={{padding:"5px" ,color:"white", fontSize : "1.5rem" , fontFamily : "Dancing Script"}}>You are my <span style={{color : "Yellow", fontWeight: "bolder"}}>YELLOW</span></div>
            </div> }
            {visibile && <div style={{ backgroundColor:"grey",display:"flex", justifyContent:"center",alignItems:"center" ,borderColor: 'grey', borderRadius:"25px"}} className="vid">
              <video autoPlay loop height={"90%"} width={"100%"} borderRadius={"25px"} controls>
                <source src={video} type='video/mp4' />
              </video>
            </div>
          }
      </div>
      </div>
    </>
  )
}

export default App
