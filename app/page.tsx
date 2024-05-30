"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-[90%] mx-auto space-y-4 mt-36">
        <Card>
          <CardHeader>
            <CardTitle>Prohibitions of tongue</CardTitle>
            <CardDescription>
              These guidelines aim to promote respectful and truthful
              communication, fostering trust and harmony in relationships and
              communities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div></div>

            <Link href={"/prohibitions-of-tongue"}>
              <Button size="sm" variant="secondary">
                {" "}
                Listen Playlist{" "}
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rights of parents</CardTitle>
            <CardDescription>
              These rights ensure parents can provide guidance, protection, and
              care, fostering their children&apos;s development and well-being.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div></div>
            <Link href="rights-of-parents">
              <Button size="sm" variant="secondary">
                Listen Playlist
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
