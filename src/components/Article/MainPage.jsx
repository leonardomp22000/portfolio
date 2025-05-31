import Badge from "./Badge";
import VideoCard from "./VideoCard";
import ProjectDescription from "./ProjectDescription";
import Button from "../Button";
import CardsProjectDemo from "./CardsProjectDemo";
import CodeExplanation from "./CodeExplanation";
import Footer from "../Footer";
import Link from "next/link";
import CardRelatedProjects from "./CardRelatedProjects";
import {
  CalendarDaysIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
export default function MainPage({
  technologies,
  ArticleTitle = "",
  timeRead = "",
  published = "",
  urlVideo = "",
  VideoDescription = "",
  mainFeatures,
  projectSections,
  mainTechnologies,
  code,
  codeTitle,
  gitHubLink,
  liveLink,
}) {
  return (
    <>
      <article className="mx-auto max-w-6xl p-4 sm:px-14 xl:p-0">
        <div className="flex gap-2">
          {technologies.map((label, index) => {
            return (
              <Badge
                variant={label === "Project" ? "solid" : "outline"}
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
            <ClockIcon width={20} /> Time to read: {timeRead}
          </span>
        </div>
        <div className="mt-3">
          <div>
            {urlVideo ? (
              <VideoCard
                VideoDescription={VideoDescription}
                videoUrl={urlVideo}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <section className="mt-3 flex flex-col gap-4">
          {projectSections.map((section) => {
            return (
              <ProjectDescription
                key={section.titleSection}
                titleSection={section.titleSection}
                projectDescription={section.projectDescription}
                children={
                  section.content === "features" ? (
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-evenly">
                      <CardsProjectDemo
                        cardTitle="Main Features"
                        elementListCard={mainFeatures}
                      />
                      <CardsProjectDemo
                        cardTitle="Main Technologies"
                        elementListCard={mainTechnologies}
                      />
                    </div>
                  ) : (
                    <CodeExplanation code={code} codeTitle={codeTitle} />
                  )
                }
              />
            );
          })}
        </section>

        <section className="mt-5 flex flex-col gap-4 rounded-lg border border-gray-400 p-4 sm:flex-row">
          <div>
            <h4 className="font-poppins text-lg font-semibold">
              Interested in the code?
            </h4>

            <p className="font-poppins text-base text-black/75">
              Check out the full GitHub repository for source code, installation
              instructions, and documentation.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <Link href={gitHubLink}>
              <Button className="h-12 whitespace-nowrap">See on Github</Button>
            </Link>
            <Link href={liveLink}>
              <Button
                className="flex h-12 items-center gap-2 whitespace-nowrap"
                variant="outline"
              >
                <span>See live</span>
                <ArrowRightIcon width={20} />
              </Button>
            </Link>
          </div>
        </section>
        <div className="my-5 border border-gray-300"></div>

        {/* <section className="my-6">
          <h3 className="my-4 font-poppins text-xl font-semibold">
            Proyectos relacionados
          </h3>

          <div className="flex justify-between gap-4">
            <CardRelatedProjects />
            <CardRelatedProjects />
            <CardRelatedProjects />
            <CardRelatedProjects />
          </div>
        </section> */}
      </article>

      <Footer />
    </>
  );
}
