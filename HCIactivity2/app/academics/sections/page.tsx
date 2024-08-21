"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
export const timeslot = [
  {
    key: "1",
    label: "9:00-10:00",
  },
  {
    key: "2",
    label: "10:00-11:00",
  },
  {
    key: "3",
    label: "11:00-12:00",
  },
  {
    key: "4",
    label: "12:00-1:00",
  },
  {
    key: "5",
    label: "1:00-2:00",
  },
  {
    key: "6",
    label: "2:00-3:00",
  },
  {
    key: "7",
    label: "3:00-4:00",
  },
  {
    key: "8",
    label: "4:00-5:00",
  },
];
const SectionsForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Sections Form</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <Input fullWidth label="Section ID" placeholder="Enter Section ID" />
        <Input
          fullWidth
          label="Section Name"
          placeholder="Enter Section Name"
        />
        <Input fullWidth label="Year" placeholder="Enter Year" />
        <Input fullWidth label="Building" placeholder="Enter Building Name" />
        <Input fullWidth label="Room Number" placeholder="Enter Room Number" />
        <Select label="Select TimeSlot">
          {timeslot.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
};

export default SectionsForm;
