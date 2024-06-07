import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I'm Chris Wong and my Chinese is
              <span className="whitespace-nowrap"> 王 穎(Wáng Yǐng)</span>
              . I'm an independent <b>Photographer</b> based
              in Changsha, China.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
            As a passionate filmmaker, I am deeply devoted to the craft of 
            creating movies. I not only have a keen interest in learning new 
            production techniques but also have a profound love for every 
            aspect of filmmaking, from scriptwriting to cinematography, 
            and from editing to sound design. My aspiration is to utilize 
            my technical skills and creative imagination to produce impactful
            and thought-provoking films that resonate deeply with audiences.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
            I'm passionate about traveling and freedom. My dream is to be a 
            freelancer, allowing me to organize my life and work on my own 
            terms, integrating my love for exploration into my career!
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.jpg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
