import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { I_upgrade } from "@/models/interfaces";

const Upgrade: React.FC<I_upgrade> = ({ set_is_upgrade, is_upgrade }) => {
  return (
    <Dialog
      open={is_upgrade}
      onOpenChange={() => set_is_upgrade((prev) => !prev)}
    >
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className=" w-full h-[50%] flex flex-col bg-cyan-600/10">
        <DialogHeader>
          <DialogTitle className=" text-center w-full flex text-[18px] text-black">
            Upgrade your account
          </DialogTitle>
          <DialogDescription className=" w-full flex items-center text-black lg:text-[14px] text-lg">
            Access bespoke feature sets and tokens to use on{" "}
            <i className=" mx-1">plata.migos</i>
          </DialogDescription>
        </DialogHeader>
        <div className=" w-full flex flex-col space-y-12 ">
          <p className=" lg:text-[14px] text-lg">
            Stay tuned for more. Tokens will be provided for early subscribers
            to upgraded account features
          </p>
          <div className=" w-full flex justify-center items-center">
            <button
              onClick={() => set_is_upgrade((prev) => !prev)}
              className="w-full hover:scale-95 transition-all duration-300 ease-in-out hover:bg-white hover:text-black cursor-pointer lg:h-12 h-20 sm:w-10/12 md:w-8/12 lg:w-6/12 flex justify-center items-center bg-black text-white rounded-[6px] "
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Upgrade;
