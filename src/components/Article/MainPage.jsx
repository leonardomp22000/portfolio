import Badge from "./Badge";
import VideoCard from "./VideoCard";

import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
export default function MainPage({
  technologies,
  ArticleTitle = "",
  timeRead = "",
  published = "",
  urlVideo = "",
}) {
  return (
    <>
      <article>
        <div className="flex gap-2">
          {technologies.map((label, index) => {
            return (
              <Badge
                variant={label === "Proyecto" ? "solid" : "outline"}
                key={`${label}-${index}`}
              >
                {label}
              </Badge>
            );
          })}
        </div>
        <h1 className="mt-2 font-poppins text-4xl">{ArticleTitle}</h1>
        <div className="flex flex-col gap-2 text-black/70 sm:flex-row sm:gap-8">
          <span className="flex">
            <CalendarDaysIcon width={20} /> Published: {published}
          </span>
          <span className="flex">
            <ClockIcon width={20} /> Time: {timeRead}
          </span>
        </div>
        <div className="mx-auto mt-3 max-w-2xl">
          <div>
            {urlVideo ? (
              <VideoCard videoUrl="https://www.youtube.com/watch?v=QdbRhrMPNN4" />
            ) : (
              ""
            )}
          </div>
        </div>
      </article>
    </>
  );
}
