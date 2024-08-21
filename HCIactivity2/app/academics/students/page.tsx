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
const StudentForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Student Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input fullWidth label="ID" placeholder="Enter ID" />
        <Input fullWidth label="Name" placeholder="Enter Name" />
        <Input
          fullWidth
          label="Dept Name"
          placeholder="Enter Department Name"
        />
        <Input
          fullWidth
          label="Total Credits"
          placeholder="Enter Total Credits"
        />
        <Input fullWidth label="Course ID" placeholder="Enter Course ID" />
        <Input fullWidth label="Section ID" placeholder="Enter Section ID" />
        <Select label="Select Semester">
          {semester.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Input fullWidth label="Grade" placeholder="Enter Grade" />
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default StudentForm;
