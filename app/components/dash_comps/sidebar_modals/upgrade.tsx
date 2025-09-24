import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SetStateAction } from "react";

export interface I_upgrade {
  set_is_upgrade: React.Dispatch<SetStateAction<boolean>>;
  is_upgrade: boolean;
}

const Upgrade: React.FC<I_upgrade> = ({ set_is_upgrade, is_upgrade }) => {
  return (
    <Dialog
      open={is_upgrade}
      onOpenChange={() => set_is_upgrade((prev) => !prev)}
    >
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Upgrade;
