export default function Button({
  children,
  onClick,
  id,
}: {
  children: React.ReactNode;
  onClick: () => void;
  id: string;
}) {
  return (
    <button
      className="px-3 py-1 text-md font-bold text-white bg-yellow-700 rounded-full"
      onClick={onClick}
      data-testid={id}
    >
      {children}
    </button>
  );
}
