import OverviewIcon from "@/public/assets/overview.svg";
import Contact from "@/public/assets/contact.png";
import Appointment from "@/public/assets/appointment.png";
import Chat from "@/public/assets/chat.png";
import Settings from "@/public/assets/settings.png";
import Logout from "@/public/assets/logout.png";

const navLinks = [
  {
    name: "Overview",
    path: "/overview",
    icon: OverviewIcon,
  },

  {
    name: "Appointments",
    path: "/appointments",
    icon: Appointment,
  },

  {
    name: "Pathological Results",
    path: "/pathological-results",
    icon: Contact,
  },

  {
    name: "Chats",
    path: "/chats",
    icon: Chat,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Log out",
    path: "/logout",
    icon: Logout,
  },
];

export default navLinks;
