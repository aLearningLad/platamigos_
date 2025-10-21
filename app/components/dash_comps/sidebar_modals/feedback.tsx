import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { I_feedback } from "@/models/interfaces";
import { useState } from "react";
import toast from "react-hot-toast";

const Feedback: React.FC<I_feedback> = ({ is_feedback, set_is_feedback }) => {
  const [is_email, set_is_email] = useState<boolean>(false);

  return (
    <Dialog
      open={is_feedback}
      onOpenChange={() => set_is_feedback((prev) => !prev)}
    >
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className=" h-[40%] ">
        <DialogHeader>
          <DialogTitle>
            {is_email ? "Add your email" : `We’d love your feedback 💬`}
          </DialogTitle>
          {!is_email ? (
            <DialogDescription>
              Tell us what you think! Your feedback helps us improve and make{" "}
              <i>plata.migos</i> even better once we launch Pro features and
              deep integrations
            </DialogDescription>
          ) : (
            <DialogDescription>
              <div className=" w-full flex justify-center">
                <input
                  type="text"
                  className=" text-xl lg:text-[14px] w-full sm:w-10/12 md:w-8/12 bg-neutral-600/20 text-black placeholder:text-black/80 p-2 rounded-[6px] h-20 lg:h-12 "
                  placeholder="Eg. cloudysocks@coldmail.com"
                />
              </div>
            </DialogDescription>
          )}
        </DialogHeader>
        <div className=" w-full flex flex-col items-center gap-5 lg:gap-4 justify-center">
          {!is_email && (
            <button
              onClick={() => set_is_email((prev) => !prev)}
              className=" w-full cursor-pointer rounded-[6px] text-lg lg:text-[14px] sm:w-10/12 md:w-8/12 lg:w-6/12 h-20 bg-black text-white lg:h-8 "
            >
              Join feedback mail list
            </button>
          )}
          {is_email && (
            <button
              onClick={() => {
                set_is_feedback(false);
                set_is_email(false),
                  toast.success("You're subscribed to feedback mail list!");
              }}
              className=" w-full cursor-pointer rounded-[6px] text-lg lg:text-[14px] sm:w-10/12 md:w-8/12 lg:w-6/12 h-20 bg-black text-white lg:h-8 "
            >
              Subscribe
            </button>
          )}
          <button
            onClick={() => set_is_feedback((prev) => !prev)}
            className=" w-full cursor-pointer text-lg text-[14px] rounded-[6px] sm:w-10/12 md:w-8/12 lg:w-6/12 h-20 bg-cyan-600 text-white lg:h-8 "
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
