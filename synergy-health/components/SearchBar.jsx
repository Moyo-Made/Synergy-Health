import SearchIcon from "@/public/assets/search-icon.svg";
import Settings from "@/public/assets/settings.png";
import Notification from "@/public/assets/notification.svg";
import Vertical from "@/public/assets/vertical-line.svg";
import Patient from "@/public/assets/patient-img.svg";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className=" bg-[#F7F7F7] rounded-[20px] w-[1050px] h-[78px] absolute top-[40px] left-[423px]">
      <div className="flex gap-10 pl-5 ">
        <div className="flex bg-white w-[591px] h-[35px] rounded-[16px] pl-4 mt-5 gap-3">
          <Image src={SearchIcon} alt="Search icon" width={24} height={24} />
          <span className="pt-2 text-[#353532] text-[14px]">Search</span>
        </div>

        <div className="flex gap-5 mt-3">
          <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center pl-1 pt-1">
            <Image src={Settings} alt="settings icon" width={30} height={30} />
          </div>

          <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center ">
            <Image
              src={Notification}
              alt="Notification icon"
              width={30}
              height={30}
            />
          </div>
        </div>

        <div className="">
          <Image src={Vertical} alt="Vertical line" width={20} height={74} />
        </div>

        <div className="flex gap-2">
          <div className="mt-3">
            <Image
              src={Patient}
              className="rounded-full border-[3px] border-white"
              width={50}
              height={50}
            />
          </div>

          <div className="block mt-4">
            <div>
              <span className="text-[#3C3633] text-[13px] font-semibold">
                Lucy Rae
              </span>
            </div>
            <div className="-mt-1">
              <span className="text-[#3572EF] text-[11px] font-normal">
                Patient
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
