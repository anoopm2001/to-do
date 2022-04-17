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
import { useRouter } from 'next/router'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function list({ tasklist }) {
  var x = new Date() - (new Date() - 1)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [calendarClicked, setCalendarClicked] = useState(false)
  const [date, setDate] = useState('')
  const [checked, setChecked] = useState(false)
  function dateSelect() {
    setDate(startDate.toDateString())
    setCalendarClicked(false)
  }
  function cancel() {
    setDate('')
    setCalendarClicked(false)
  }
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  function onChecked() {
    setChecked(!checked)
  }
  const router = useRouter()
  console.log(tasklist)
  const [input, setInput] = useState('')
  const obj = { task: input, deadline: date }
  async function Post() {
    console.log('Called')
    await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => console.log(input))
      .catch((err) => console.log(err))
    router.reload()
  }
  function calendarClick() {
    setCalendarClicked(true)
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
                    {calendarClicked ? (
                      <div className="flex flex-col">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          inline
                          minDate={new Date()}
                        />
                        <div className="mx-auto flex max-w-sm gap-x-7 pt-2">
                          <Button
                            color="lightBlue"
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                            onClick={cancel}
                          >
                            Cancel
                          </Button>
                          <Button
                            color="lightBlue"
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                            onClick={dateSelect}
                          >
                            Done
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-x-2">
                        <Button
                          color="lightBlue"
                          buttonType="link"
                          size="regular"
                          rounded={true}
                          block={false}
                          iconOnly={true}
                          ripple="dark"
                          onClick={calendarClick}
                        >
                          <CalendarIcon className="cursor pointer h-5 text-gray-500 hover:text-black" />
                        </Button>
                        <h1>{date}</h1>
                      </div>
                    )}
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

            {tasklist.taskName.map((item) => (
              <div className="mt-2 flex items-center gap-x-4  p-3 hover:bg-[#F3F2F1]">
                <Checkbox color="lightBlue" id="checkbox" onClick={onChecked} />
                <div className="flex flex-grow items-center justify-between text-sm font-light text-black">
                  {checked ? (
                    <h1 className="text-sm font-light text-black line-through">
                      {item.task}
                    </h1>
                  ) : (
                    <h1 className="text-sm font-light text-black">
                      {item.task}
                    </h1>
                  )}
                  <h1>{item.deadline}</h1>
                </div>
              </div>
            ))}
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default list

export async function getServerSideProps() {
  const tasklist = await fetch('http://localhost:3000/api/tasks').then(
    (response) => response.json()
  )

  return {
    props: {
      tasklist,
    },
  }
}
