import React from 'react'
import Header from '../Components/Header'
import { MenuIcon } from '@heroicons/react/outline'
import { SunIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/outline'
import { CalendarIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import Checkbox from '@material-tailwind/react/Checkbox'
import Input from '@material-tailwind/react/Input'
import Button from '@material-tailwind/react/Button'
import { useState } from 'react'
function list() {
  const [input, setInput] = useState('')
  const obj = { task: input }
  async function Post() {
    console.log('Called')
    await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => console.log(input))
      .catch((err) => console.log(err))
  }
  const [title, setTitle] = useState('My Day')
  const [myDay, setMyDay] = useState(
    'flex items-center gap-x-2 py-2  cursor-pointer'
  )
  const [important, setImportant] = useState(
    'flex items-center gap-x-2 py-2 cursor-pointer'
  )
  const [planned, setPlanned] = useState(
    'flex items-center gap-x-2 py-2 cursor-pointer'
  )
  const [assignedToMe, setAssignedToMe] = useState(
    'flex items-center gap-x-2 py-2 cursor-pointer'
  )
  const [tasks, setTasks] = useState('flex items-center gap-x-2 cursor-pointer')

  const [addTask, setAddTask] = useState(false)

  function myDayClicked() {
    setMyDay('flex items-center py-2 gap-x-2 bg-[#EDEDED] cursor-pointer')
    setTasks('flex items-center gap-x-2 py-2  cursor-pointer')
    setAssignedToMe('flex items-center gap-x-2 py-2  cursor-pointer')
    setImportant('flex items-center gap-x-2 py-2  cursor-pointer')
    setPlanned('flex items-center gap-x-2 py-2  cursor-pointer')
    setTitle('My Day')
  }

  function importantClicked() {
    setMyDay('flex items-center gap-x-2 py-2  cursor-pointer')
    setTasks('flex items-center gap-x-2 py-2  cursor-pointer')
    setAssignedToMe('flex items-center gap-x-2 py-2  cursor-pointer')
    setImportant('flex items-center py-2 gap-x-2 bg-[#EDEDED] cursor-pointer')
    setPlanned('flex items-center gap-x-2 py-2  cursor-pointer')
    setTitle('Important')
  }

  function plannedClicked() {
    setMyDay('flex items-center gap-x-2 py-2  cursor-pointer')
    setTasks('flex items-center gap-x-2 py-2  cursor-pointer')
    setAssignedToMe('flex items-center gap-x-2 py-2  cursor-pointer')
    setImportant('flex items-center gap-x-2 py-2  cursor-pointer')
    setPlanned('flex items-center py-2 gap-x-2 bg-[#EDEDED] cursor-pointer')
    setTitle('Planned')
  }

  function tasksClicked() {
    setMyDay('flex items-center gap-x-2 py-2  cursor-pointer')
    setTasks('flex items-center py-2 gap-x-2 bg-[#EDEDED] cursor-pointer')
    setAssignedToMe('flex items-center gap-x-2 py-2  cursor-pointer')
    setImportant('flex items-center gap-x-2 py-2  cursor-pointer')
    setPlanned('flex items-center gap-x-2 py-2  cursor-pointer')
    setTitle('Tasks')
  }

  function assignedToMeClicked() {
    setMyDay('flex items-center gap-x-2 py-2  cursor-pointer')
    setTasks('flex items-center gap-x-2 py-2  cursor-pointer')
    setAssignedToMe(
      'flex items-center py-2 gap-x-2 bg-[#EDEDED] cursor-pointer'
    )
    setImportant('flex items-center gap-x-2 py-2  cursor-pointer')
    setPlanned('flex items-center gap-x-2 py-2  cursor-pointer')
    setTitle('Assigned To Me')
  }

  function AddTask() {
    setAddTask(true)
  }
  function FocusLost() {
    setAddTask(false)
  }
  function CancelTask() {
    setAddTask(false)
  }
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex min-h-screen w-[320px] flex-col gap-y-3 bg-[#F3F2F1] p-3">
          <div className="items-start py-2">
            <MenuIcon className="h-7" />
          </div>
          <div className={myDay} onClick={myDayClicked}>
            <SunIcon className="h-5" />
            <h1 className="font-light">My day</h1>
          </div>
          <div className={important} onClick={importantClicked}>
            <StarIcon className="h-4" />
            <h1 className="font-light">Important</h1>
          </div>
          <div className={planned} onClick={plannedClicked}>
            <CalendarIcon className="h-4" />
            <h1 className="font-light">Planned</h1>
          </div>
          <div className={assignedToMe} onClick={assignedToMeClicked}>
            <UserIcon className="h-4" />
            <h1 className="font-light">Assigned to me</h1>
          </div>
          <div className={tasks} onClick={tasksClicked}>
            <HomeIcon className="h-4" />
            <h1 className="font-light">Tasks</h1>
          </div>
        </div>
        <div className="flex flex-grow flex-col">
          <div className="flex flex-col">
            <h1 className="px-7 pt-7 pb-1 text-xl font-semibold">{title}</h1>
            <p className="px-7 text-[13px] font-extralight">Sunday, April 3</p>
          </div>
          <div className="items-center p-3 ">
            <div className="flex flex-col bg-[#F3F2F1]">
              <div
                className="flex flex-grow cursor-pointer items-center gap-x-4  p-3"
                onClick={AddTask}
              >
                <PlusIcon className="h-5 text-[#2576D3]" />
                {addTask ? (
                  <Input
                    type="text"
                    color="lightBlue"
                    size="regular"
                    outline={false}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a Task"
                    className="bg-white"
                  />
                ) : (
                  <h1 className="text-md font-extralight text-[#2576D3]">
                    Add a Task
                  </h1>
                )}
              </div>
              <div>
                {addTask ? (
                  <div className=" ml-12 flex cursor-pointer items-center justify-between pb-2 ">
                    <CalendarIcon className="cursor pointer h-5 text-gray-500 hover:text-black" />
                    <div className="flex items-center">
                      {input.length != 0 ? (
                        <Button
                          color="gray"
                          buttonType="link"
                          size="sm"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="light"
                          className="text-black"
                          onClick={Post}
                        >
                          Add
                        </Button>
                      ) : (
                        <p className="hidden"></p>
                      )}
                      <Button
                        color="gray"
                        buttonType="link"
                        size="sm"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        className="text-black"
                        onClick={CancelTask}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            <div className="mt-2 flex cursor-pointer items-center gap-x-4  p-3 hover:bg-[#F3F2F1]">
              <Checkbox color="lightBlue" id="checkbox" />
              <h1 className="text-sm font-light text-black">TaskName</h1>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default list
