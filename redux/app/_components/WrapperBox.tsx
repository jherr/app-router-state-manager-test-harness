export default function WrapperBox({
  children,
  title,
  type,
  className,
  important,
}: {
  children: React.ReactNode;
  title: string;
  type?: "rsc" | "client";
  className?: string;
  important?: boolean;
}) {
  return (
    <div
      className={`m-2 mt-6 px-1 py-3 ${
        type === "rsc" ? "border-green-800 border-dashed" : "border-red-800"
      } rounded-xl ${
        important ? "border-4 border-blue-800" : "border-2 border-opacity-50"
      } ${className}`}
    >
      <div className="flex justify-center">
        <h1
          className={`-mt-9 text-lg font-thin mb-1 ${
            important ? "" : "text-gray-500"
          }`}
        >
          <span className="bg-black pl-2">
            {type === "rsc" ? "RSC" : "Client"}:{" "}
          </span>
          <span className="font-normal bg-black pr-2">{title}</span>
        </h1>
      </div>
      {children}
    </div>
  );
}
