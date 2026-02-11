type Props = {
  colSpan?: number;
  rowSpan?: number;
  children?: React.ReactNode;
};

export default function Card({ colSpan = 1, rowSpan = 1, children }: Props) {
  return (
    <div
      id="card"
      className={`col-span-${colSpan} row-span-${rowSpan} rounded-md p-4`}
    >
      {children}
    </div>
  );
}
