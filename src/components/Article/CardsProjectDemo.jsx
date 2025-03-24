export default function CardsProjectDemo({ elementListCard, cardTitle = "" }) {
  return (
    <div className="flex-1 rounded-2xl border border-gray-400 p-4">
      <h5 className="font-poppins text-lg font-semibold"> {cardTitle}</h5>
      <ul className="list-disc space-y-4 p-4 pl-5">
        {elementListCard.map((feature) => {
          return <li key={feature}>{feature}</li>;
        })}
      </ul>
    </div>
  );
}
