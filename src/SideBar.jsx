import React from 'react'
import './Bot.css'
import logo from "./assets/chatgpt.svg"
import chat from "./assets/message.svg"
import home from "./assets/home.svg"
import rocket from "./assets/rocket.svg"
import save from "./assets/bookmark.svg"

export default function SideBar() {
  return (
    <div className='side-bar'>
        <div className="side-bar-top">
            <div className="title">
                <img src={logo} alt="GPT logo" />
                <h1>ChatGPT</h1>
            </div>

            <div className="new-chat">
                + New Chat
            </div>

            <div className="prog">
                <img src={chat} alt="CHAT" />
                <p>What is programming</p>
            </div>
            <div className="api">
                <img src={chat} alt="CHAT" />
                <p>How to use API ?</p>
            </div>
        </div>

        <div className="side-bar-bottom">
            <div className="pattern">
                <img src={home} alt="HOME" />
                <p>Home</p>
            </div>
            <div className="pattern">
                <img src={save} alt="icon-saved" />
                <p>Saved</p>
            </div>
            <div className="pattern">
                <img src={rocket} alt="ROCKET" />
                <p>Upgrade to Pro</p>
            </div>

        </div>

    </div>
  )
}
