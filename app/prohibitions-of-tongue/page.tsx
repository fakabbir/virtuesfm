"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
const tracks = [
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_1.mp3",
    title: "lecture_1.mp3",
    tags: ["house"],
  },

  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_2.mp3",
    title: "lecture_2.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_3.mp3",
    title: "lecture_3.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_4.mp3",
    title: "lecture_4.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_5.mp3",
    title: "lecture_5.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_6.mp3",
    title: "lecture_6.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_7.mp3",
    title: "lecture_7.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_9.mp3",
    title: "lecture_9.mp3",
    tags: ["house"],
  },

  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_10.mp3",
    title: "lecture_10.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_11.mp3",
    title: "lecture_11.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_12.mp3",
    title: "lecture_12.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_13.mp3",
    title: "lecture_13.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_14.mp3",
    title: "lecture_14.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_15.mp3",
    title: "lecture_15.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_17.mp3",
    title: "lecture_17.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_18.mp3",
    title: "lecture_18.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_19.mp3",
    title: "lecture_19.mp3",
    tags: ["house"],
  },

  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_20.mp3",
    title: "lecture_20.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_21.mp3",
    title: "lecture_21.mp3",
    tags: ["house"],
  },
  {
    url: "https://virtuesfm.vercel.app/prohibition/lecture_22.mp3",
    title: "lecture_22.mp3",
    tags: ["house"],
  },
];

export default function Home() {
  return (
    <>
      <Player
        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={true}
        sortTracks={false}
        autoPlayNextTrack={true}
      />
    </>
  );
}
