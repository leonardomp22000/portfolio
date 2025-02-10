import Title from "./Title";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Button from "./Button";
export default function CTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-md text-center p-4 flex flex-col gap-5 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-5xl "
    >
      <Title> Lets Create Something Incredible</Title>
      <Paragraph>
        If you require more information about what I do, have an interesting
        project or one of my projects caught your attention, let me know by
        leaving your email, I will contact you as soon as possible.
      </Paragraph>

      <div className="  lg:flex lg:flex-col lg:gap-4 lg:max-w-2xl lg:mx-auto w-full  ">
        <div className="w-full flex flex-col gap-3">
          <Input placeholder="Enter your name " />
          <Input placeholder="Enter your email" />

          <textarea
            className="border w-full p-4 rounded-2xl border-[#AFAFAF] bg-[#F8F8F8]"
            name="Message"
            id="message"
            placeholder="Message"
          />
        </div>

        <div className="shrink-0 mt-4">
          <Button className="px-11 py-4 font-semibold">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
