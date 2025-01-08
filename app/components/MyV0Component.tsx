"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Workout = {
  day: string
  exercise: string
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function WorkoutScheduler() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [selectedDay, setSelectedDay] = useState<string>(days[0])
  const [exercise, setExercise] = useState<string>("")

  const addWorkout = () => {
    if (exercise.trim() !== "") {
      setWorkouts([...workouts, { day: selectedDay, exercise }])
      setExercise("")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Workout Scheduler</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="day">Day</Label>
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger id="day">
                <SelectValue placeholder="Select a day" />
              </SelectTrigger>
              <SelectContent>
                {days.map((day) => (
                  <SelectItem key={day} value={day}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="exercise">Exercise</Label>
            <Input
              id="exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="Enter exercise"
            />
          </div>
          <Button onClick={addWorkout}>Add Workout</Button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Scheduled Workouts</h3>
          {workouts.map((workout, index) => (
            <div key={index} className="mb-2">
              <span className="font-medium">{workout.day}:</span> {workout.exercise}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

