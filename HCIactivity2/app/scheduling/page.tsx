import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { TimeInput } from "@nextui-org/date-input";
export default function Scheduling() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Schedule a time slot</h1>
      <form className=" w-4/6 mx-auto p-4  rounded-lg shadow-md space-y-4">
        <DatePicker
          labelPlacement="outside-left"
          label="Select Date for time-slot : "
          fullWidth
        />
        <TimeInput label="Select Start time : " labelPlacement="outside-left" />
        <TimeInput label="Select End time : " labelPlacement="outside-left" />
        <Button type="submit" color="primary" className="w-full">
          Submit
        </Button>
      </form>
    </>
  );
}
