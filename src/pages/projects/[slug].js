import Navbar from "@/components/Navbar";
import MainPage from "@/components/Article/MainPage";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const res = await fetch(`http://localhost:8080/projects/${slug}`);

  if (!res.ok) {
    throw new Error(`Error en la API: ${res.status} ${res.statusText}`);
  }
  const projectData = await res.json();

  return {
    props: {
      project: projectData,
    },
  };
}

export default function ProjectPage({ project }) {
  return (
    <>
      <Navbar />
      <MainPage
        technologies={project.technologies}
        ArticleTitle={project.title}
        timeRead={project.timeRead}
        published={project.published}
        urlVideo={project.urlVideo}
        VideoDescription={project.videoDescription}
        projectSections={project.projectSection}
        mainFeatures={project.mainFeatures}
        mainTechnologies={project.mainTechnologies}
        code={project.code}
        codeTitle={project.codeTitle}
      />
    </>
  );
}
