import YoutubeEmbed from "./YoutubeEmbed";
export default function ({ videoUrl = "", VideoDescription = "" }) {
  return (
    <>
      <div className="rounded-2xl border border-gray-300">
        <div>
          <YoutubeEmbed videoUrl={videoUrl} />
        </div>
        <div className="flex flex-col gap-2 p-4 md:p-6">
          <h5 className="font-poppins text-xl font-normal">
            Project Demostration
          </h5>
          <p className="font-poppins text-black/75">{VideoDescription}</p>
        </div>
      </div>
    </>
  );
}
