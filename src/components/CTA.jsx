import Title from "./Title";
import Paragraph from "./Paragraph";
import Input from "./Input";
import Button from "./Button";
export default function CTA() {
  return (
    <>
      <section className="mx-auto max-w-sm text-center p-4 flex flex-col gap-5">
        <Title> Lets Design Together</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </Paragraph>

        <Input>Enter your email</Input>
        <div>
          <Button className="px-11 py-4 font-semibold"> Contact Me</Button>
        </div>
      </section>
    </>
  );
}
