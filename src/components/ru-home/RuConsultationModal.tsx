"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RussianMultiStepForm from "@/components/RussianMultiStepForm";

interface RuConsultationModalProps {
  children: React.ReactNode;
}

export function RuConsultationModal({ children }: RuConsultationModalProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-hidden p-0 rounded-2xl border-0 shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Записаться на консультацию</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
          <RussianMultiStepForm landingPath="/ru" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
