import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};

const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:ischriswong@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "X",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://twitter.com/ischriswong",
    icon: faXTwitter,
  },
  {
    name: "LinkedIn",
    className: "bg-blue-500 hover:bg-blue-600",
    href: "http://linkedin.com/in/chris-wong-62a7612a6",
    icon: faLinkedin,
  },
  {
    name: "Instagram",
    className: "bg-pink-500 hover:bg-pink-600",
    href: "https://instagram.com/ischriswong/",
    icon: faInstagram,
  },
  {
    name: "WhatsApp",
    className: "bg-green-500 hover:bg-green-600",
    href: "https://wa.me/8617872364540",
    icon: faWhatsapp,
  },
];

export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className,
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon icon={contact.icon} className="w-fit" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
