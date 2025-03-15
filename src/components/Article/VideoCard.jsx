import YoutubeEmbed from "./YoutubeEmbed";
export default function ({ videoUrl = "" }) {
  return (
    <>
      <div className="rounded-2xl border border-gray-300">
        <div>
          <YoutubeEmbed videoUrl={videoUrl} />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h5 className="font-poppins text-xl font-normal">
            Demostracion del proyecto
          </h5>
          <p className="font-poppins text-black/75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            vel harum similique, optio esse vitae, natus consequatur molestiae
            sequi eaque dolores quidem dolore debitis quasi aperiam. Cumque
            debitis aut deserunt?
          </p>
        </div>
      </div>
    </>
  );
}
