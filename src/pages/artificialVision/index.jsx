import Navbar from "@/components/Navbar";
import MainPage from "@/components/Article/MainPage";
export default function ArtificialVision() {
  const technologies = ["Proyecto", "React", "Node.js", "Mongo"];
  return (
    <>
      <Navbar />
      <MainPage
        technologies={technologies}
        ArticleTitle="Artificial Vision with OpenCV"
        timeRead="5 minutes"
        published="13/03/25"
        urlVideo="https://www.youtube.com/watch?v=L-pdgOfgJOw"
      ></MainPage>
    </>
  );
}
