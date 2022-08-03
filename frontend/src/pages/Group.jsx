import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { teamInfo } from "../features/group/groupReducer"
import GroupInfo from "../features/group/GroupInfo"
import MemberList from "../features/group/MemberList"
import Line from "../components/Line"
import ExerciseInfo from "../features/group/ExerciseInfo"
import GroupExerciseInfo from "../features/group/GroupExerciseInfo"

export default function Group() {
  const dispatch = useDispatch()
  const location = useLocation()
  const fetchTeamId = location.pathname.split("/")[2]
  // const teamName = useSelector((state) => state.group.teamName)
  // const teamMembers = useSelector((state) => state.group.teamMembers)
  // const teamContent = useSelector((state) => state.group.teamContent)
  // const teamLeader = useSelector((state) => state.group.teamLeader)
  const teamId = 1
  // console.log("그룹페이지", teamName, fetchTeamId)

  useEffect(() => {
    dispatch(teamInfo(fetchTeamId))
  }, [])
  return (
    <div className="w-[60%] mx-auto">
      <div className="flex">
        <GroupInfo />
        {/* </div> */}
        {/* <div className="flex justify-center flex-col items-center mt-20">
        <div className="text-center">
          <p className="text-lg">멤버 리스트</p>
          <Line />
        </div>
        <MemberList />
      </div>

      <div className="flex justify-center flex-col items-center mt-20">
        <div className="text-center">
          <p className="text-lg">운동 정보</p>
          <Line />
        </div>
        <ExerciseInfo />
      </div>

      <div className="flex justify-center flex-col items-center mt-20">
        <div className="text-center">
          <p className="text-lg">그룹 운동 정보</p>
          <Line />
        </div>
        <GroupExerciseInfo /> */}
      </div>
    </div>
  )
}
