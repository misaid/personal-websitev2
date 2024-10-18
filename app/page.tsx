// External Imports
import { Linkedin, Github, Mail } from "lucide-react";

// Internal Imports
import Navbar from "../components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * The Home component is a page that displays a user's profile.
 * It is composed of a Navbar component and a user profile component.
 * @returns Home {JSX.Element} - A JSX element representing the Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="max-w-[740px] mx-auto mt-5 ">
      <div className="flex-col space-y-5 mx-5">
        <Navbar />
        <div className="w-full"></div>
        <div className="inline-flex space-x-2 w-full p-4 shadow-md rounded-lg border">
          <div className="flex ">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D5635AQFojf8ezVE49Q/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1718348643162?e=1729832400&v=beta&t=4qX594zw4al9O_ud1G5g4hdVfla1CRXf-TTf9vRnzqs" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-semibold ">Mohamed Said</h2>
            <h2 className="text-sm">Student</h2>
          </div>
          <div className=" flex w-full justify-end items-center">
            <div className="flex flex-row space-x-2">
              <Linkedin />
              <Github />
              <Mail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
