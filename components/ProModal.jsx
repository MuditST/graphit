"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useProModal } from "../hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import {
  LayoutDashboard,
  PencilRuler,
  AreaChart,
  Infinity,
  InfinityIcon,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { set } from "react-hook-form";
import axios from "axios";

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = axios.get("/api/stripe");
      window.location.href = (await response).data.url;
    } catch (error) {
      console.log(error, "STRIPE_CLIENT_ERROR");
    } finally {
      setLoading(false);
    }
  };
  const tools = [
    {
      label: "Personal Gallery Access",
      icon: LayoutDashboard,
      color: "white",
      bgColor: "white/5",
    },

    {
      label: "Infinite Graph Creations",
      icon: PencilRuler,
      color: "white",
      bgColor: "white/5",
    },

    {
      label: "Infinite Graph Uploads",
      icon: AreaChart,
      color: "white",
      bgColor: "white/5",
    },
  ];
  return (
    <Dialog open={proModal.isOpen} on onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex text-white justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex text-xl items-center gap-x-2 font-bold py-1">
              Upgrade to GraphIt
              <Badge className="uppercase text-sm py-1">PRO</Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 bg-gray-300 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <InfinityIcon />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            className="w-full"
            variant="premium"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
