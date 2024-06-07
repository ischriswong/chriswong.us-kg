import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import CyclingIcon from "@/assets/icons/Cycling.png";
import swimmingIcon from "@/assets/icons/swimming.png";
import hikingIcon from "@/assets/icons/hiking.png";
import fitnessIcon from "@/assets/icons/fitness.png";
import SUPIcon from "@/assets/icons/SUP.png";
import EnglishIcon from "@/assets/icons/English.png";
import FrenchIcon from "@/assets/icons/French.png";
import photographyIcon from "@/assets/icons/photography.png";
import campingIcon from "@/assets/icons/camping.png";
import musicIcon from "@/assets/icons/music.png";
import gameIcon from "@/assets/icons/game.png";
import movieIcon from "@/assets/icons/movie.png";
import SnorkelingIcon from "@/assets/icons/Snorkeling.png";
import RunwayIcon from "@/assets/icons/Runway.png";
import ChatGPTIcon from "@/assets/icons/ChatGPT.png";
import MidjourneyIcon from "@/assets/icons/Midjourney.png";
import SunoIcon from "@/assets/icons/Suno.png";
import GammaIcon from "@/assets/icons/Gamma.png";
import excelIcon from "@/assets/icons/excel.png";
import WordIcon from "@/assets/icons/Word.png";
import KeynoteIcon from "@/assets/icons/Keynote.svg";
import PremiereProIcon from "@/assets/icons/PremierePro.png";
import davinciresolveIcon from "@/assets/icons/davinciresolve.png";
import FinalCutProIcon from "@/assets/icons/FinalCutPro.png";
import AfterEffectsIcon from "@/assets/icons/AfterEffects.png";
import CapCutIcon from "@/assets/icons/CapCut.png";
import PhotoshopIcon from "@/assets/icons/Photoshop.png";
import lightroomIcon from "@/assets/icons/lightroom.png";
import macOSIcon from "@/assets/icons/macOS.png";
import PowerPointIcon from "@/assets/icons/PowerPoint.png";
import badmintonIcon from "@/assets/icons/badminton.png";
import windowsIcon from "@/assets/icons/windows.png";
import cantoneseIcon from "@/assets/icons/Cantonese.png";
import ChineseIcon from "@/assets/icons/Chinese.png";

export default function skills() {
  const data = [
    {
      title: "Hobbies in Life",
      skills: [
        {
          name: "Cycling",
          icon: CyclingIcon,
        },
        {
          name: "Swimming",
          icon: swimmingIcon,
        },
        {
          name: "Hiking",
          icon: hikingIcon,
        },
        {
          name: "Badminton",
          icon: badmintonIcon,
        },
        {
          name: "Fitness",
          icon: fitnessIcon,
        },
        {
          name: "SUP",
          icon: SUPIcon,
        },
        {
          name: "Photography",
          icon: photographyIcon,
        },
        {
          name: "Camping",
          icon: campingIcon,
        },
        {
          name: "Music",
          icon: musicIcon,
        },
        {
          name: "Game",
          icon: gameIcon,
        },
        {
          name: "Movie",
          icon: movieIcon,
        },
        {
          name: "Snorkeling",
          icon: SnorkelingIcon,
        },
      ],
    },
    {
      title: "Ai Tools",
      skills: [
        {
          name: "ChatGPT",
          icon: ChatGPTIcon,
        },
        {
          name: "Midjourney",
          icon: MidjourneyIcon,
        },
        {
          name: "Runway",
          icon: RunwayIcon,
        },
        {
          name: "Suno",
          icon: SunoIcon,
        },
        {
          name: "Gamma",
          icon: GammaIcon,
        },
      ],
    },
    {
      title: "Operating System",
      skills: [
        {
          name: "Windows",
          icon: windowsIcon, // 修改为windows.png
        },
        {
          name: "macOS",
          icon: macOSIcon,
        },
      ],
    },
    {
      title: "Office Software",
      skills: [
        {
          name: "Word",
          icon: WordIcon,
        },
        {
          name: "PowerPoint",
          icon: PowerPointIcon,
        },
        {
          name: "Excel",
          icon: excelIcon,
        },
        {
          name: "Keynote",
          icon: KeynoteIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "Chinese",
          icon: ChineseIcon, // 修改为Chinese.png
        },
        {
          name: "Cantonese",
          icon: cantoneseIcon, // 修改为Cantonese.png
        },
        {
          name: "English",
          icon: EnglishIcon,
        },
        {
          name: "French",
          icon: FrenchIcon,
        },
      ],
    },
    {
      title: "Editing Tools",
      skills: [
        {
          name: "Premiere Pro",
          icon: PremiereProIcon,
        },
        {
          name: "Davinci Resolve",
          icon: davinciresolveIcon,
        },
        {
          name: "Final Cut Pro",
          icon: FinalCutProIcon,
        },
        {
          name: "After Effects",
          icon: AfterEffectsIcon,
        },
        {
          name: "CapCut",
          icon: CapCutIcon,
        },
      ],
    },
    {
      title: "Visual",
      skills: [
        {
          name: "Photoshop",
          icon: PhotoshopIcon,
        },
        {
          name: "Lightroom",
          icon: lightroomIcon,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
