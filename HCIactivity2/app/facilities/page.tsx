import Link from "next/link";

const paths = [
  {
    label: "Classrooms",
    href: "/facilities/classrooms",
  },
  {
    label: "Departments",
    href: "/facilities/departments",
  },
  {
    label: "Labs",
    href: "/facilities",
  },
];

export default function Academics() {
  return (
    <div>
      <h1 className={"text-5xl font-bold text-gray-900 mb-10"}>Facilities</h1>

      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {paths.map((path) => (
          <div
            key={path.label}
            className="h-32 rounded-lg bg-gray-200 flex text-3xl items-center justify-center transition transform hover:bg-gray-300 hover:scale-105 active:scale-100"
          >
            <Link href={path.href}>{path.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
