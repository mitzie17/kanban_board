import { Separator } from "@radix-ui/react-separator";

type TaskCard = {
  label: string;
  value: number;
};

export default function TasksStats() {
  // statistic cards array
  const statisticCards: TaskCard[] = [
    { label: "total", value: 23 },
    { label: "in progress", value: 231 },
    { label: "waiting", value: 342 },
    { label: "completed", value: 212 },
  ];
  return (
    <div className="flex flex-col gap-2">
      {/* tasks label */}
      <span className="font-bold text-xl">Tasks</span>
      {/* mapping the array */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        {statisticCards.map((statCard, index) => (
          <SingleCard key={index} statCard={statCard} />
        ))}
      </div>
    </div>
  );
}

// separate component for each card
function SingleCard({ statCard }: { statCard: TaskCard }) {
  return (
    <div className="p-3 bg-gray-100 rounded-xl">
      {/* label of each stat card */}
      <span className="text-gray-600 text-[12px]">
        {statCard.label.toUpperCase()}
      </span>
      {/* vertical line and the number value */}
      <div className="flex gap-2 mt-1 items-center">
        <Separator className="w-1 h-4 bg-primary" orientation={"vertical"} />
        <span className="font-bold text-lg">{statCard.value}</span>
      </div>
    </div>
  );
}
