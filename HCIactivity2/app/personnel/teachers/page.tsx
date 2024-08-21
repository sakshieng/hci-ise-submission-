"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
export const semester = [
  {
    key: "1",
    label: "1st Semester",
  },
  {
    key: "2",
    label: "2nd Semester",
  },
  {
    key: "3",
    label: "3rd Semester",
  },
  {
    key: "4",
    label: "4th Semester",
  },
  {
    key: "5",
    label: "5th Semester",
  },
  {
    key: "6",
    label: "6th Semester",
  },
  {
    key: "7",
    label: "7th Semester",
  },
  {
    key: "8",
    label: "8th Semester",
  },
];
const TeacherForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Teacher Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input fullWidth label="Teacher ID" placeholder="Enter Teacher ID" />
        <Input fullWidth label="Teacher Name" placeholder="Enter Teacher Name" />
        <Input
          fullWidth
          label="Dept Name"
          placeholder="Enter Department Name"
        />
        <Input fullWidth label="Course ID" placeholder="Enter Course ID" />
        <Input fullWidth label="Section ID" placeholder="Enter Section ID" />
        <Select label="Select Semester">
          {semester.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Input fullWidth type="number" label="Year" placeholder="Enter Year" />
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default TeacherForm;
