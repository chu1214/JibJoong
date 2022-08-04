import React, { useEffect } from "react"
import Profile from "../features/myPage/Profile"
import { useSelector, useDispatch } from "react-redux"
import PersonalExerciseInfo from "../features/myPage/PersonalExerciseInfo"
import GroupList from "../features/myPage/GroupList"
import { memberInfo } from "../features/login/memberReducer"

export default function MyPage() {
  const memberNickname = useSelector((state) => state.member.memberNickname)
  console.log(1)
  return (
    <div>
      <div className="flex justify-center pt-4">
        <Profile />
      </div>
      <div className="flex justify-center pb-10">
        <PersonalExerciseInfo />
      </div>
      <div className="p-5">
        <GroupList />
      </div>
    </div>
  )
}
