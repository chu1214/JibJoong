import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Card from "../card/Card"
import SmallIcon from "../icon/SmallIcon"

const NavItem = ({ children }) => {
  return <li className="m-2 flex justify-center items-center">{children}</li>
}

const GroupList = ({ setVisible }) => {
  return (
    <div className="absolute z-30 top-[4rem] right-[2.5em] ">
      <Card size="middle">
        <div onClick={() => setVisible(false)}>닫기 </div>
        <ul>
          <li>그룹 1 1/10(명)</li>
          <li>그룹 2 1/10(명)</li>
          <li>그룹 3 1/10(명)</li>
        </ul>
      </Card>
    </div>
  )
}

const InfoList = ({ setVisible }) => {
  return (
    <div className="absolute z-30 top-[4rem] right-[2.5em] border">
      <Card size="middle">
        <div onClick={() => setVisible(false)}>닫기</div>
        <ul>
          <li>log out</li>
        </ul>
      </Card>
    </div>
  )
}

export default function Navbar() {
  const [showGroup, setShowGroup] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  return (
    <nav className="flex justify-between p-3 border">
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>
      <ul className="flex">
        <NavItem>
          <NavLink to="/">명예의 전당</NavLink>
        </NavItem>
        <NavItem>
          <div
            onClick={() => {
              setShowGroup(true)
            }}
          >
            그룹 목록
          </div>
          {showGroup && <GroupList setVisible={setShowGroup} />}
        </NavItem>
        <NavItem>
          <div
            onClick={() => {
              setShowInfo(true)
            }}
          >
            <SmallIcon image="https://news.samsungdisplay.com/wp-content/uploads/2022/05/IT_twi001t1345955-1-1024x639.jpg" />
          </div>
          {showInfo && <InfoList setVisible={setShowInfo} />}
        </NavItem>
      </ul>
    </nav>
  )
}