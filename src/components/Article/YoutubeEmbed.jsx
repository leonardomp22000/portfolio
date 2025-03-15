export default function YoutubeEmbed({ videoUrl = "" }) {
  // Extraer el ID del video desde la url Completa de Youtube
  const videoId = new URL(videoUrl).searchParams.get("v");
  if (!videoId) {
    return <p className="text-red-500">URL invalida</p>;
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative aspect-[2/1] w-full">
        <iframe
          className="h-full w-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Youtube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-inpicture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
