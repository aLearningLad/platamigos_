import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { I_feedback } from "@/models/interfaces";

const Feedback: React.FC<I_feedback> = ({ is_feedback, set_is_feedback }) => {
  return (
    <Dialog
      open={is_feedback}
      onOpenChange={() => set_is_feedback((prev) => !prev)}
    >
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className=" h-[40%] ">
        <DialogHeader>
          <DialogTitle>{"We’d"} love your feedback 💬</DialogTitle>
          <DialogDescription>
            Tell us what you think! Your feedback helps us improve and make{" "}
            <i>plata.migos</i> even better once we launch Pro features and deep
            integrations
          </DialogDescription>
        </DialogHeader>
        <div className=" w-full flex flex-col items-center gap-5 lg:gap-4 justify-center">
          <button className=" w-full rounded-[6px] text-lg lg:text-[14px] sm:w-10/12 md:w-8/12 lg:w-6/12 h-20 bg-black text-white lg:h-8 ">
            Join feedback mail list
          </button>
          <button
            onClick={() => set_is_feedback((prev) => !prev)}
            className=" w-full text-lg text-[14px] rounded-[6px] sm:w-10/12 md:w-8/12 lg:w-6/12 h-20 bg-cyan-600 text-white lg:h-8 "
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
