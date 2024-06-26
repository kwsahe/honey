"use client";

import { useEffect, useState } from "react";
import Head from 'next/head'; // Head 컴포넌트를 import 함
import Image from "next/image";
import Link from "next/link";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AIphoto from '../public/AIphoto.png'; // 이미지 import

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Head>
        <title>상헌의 포트폴리오</title> {/* 메타 태그 설정 */}
      </Head>
      <nav className="fixed top-0 right-0 z-20 flex gap-4 p-4 bg-gray-300">
        <Link href="#home" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-4 text-sm font-medium text-gray-50 hover:bg-gray-600">Main</Link>
        <Link href="#projects" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-4 text-sm font-medium text-gray-50 hover:bg-gray-600">Projects</Link>
        <Link href="#skills" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-4 text-sm font-medium text-gray-50 hover:bg-gray-600">Skills</Link>
        <Link href="#contact" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-700 px-4 text-sm font-medium text-gray-50 hover:bg-gray-600">Contact</Link>
      </nav>

      <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
        <div className="w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Kwon Sangheon</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  A PM in the Artificial Intelligence industry and also a game designer.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#projects"
                >
                  View Projects
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800 text-gray-500"
                  href="#contact"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <Image
              alt="John Doe"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height={550}
              src={AIphoto}
              width={550}
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center" id="projects">
        <div className="w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-black-100">Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black-300">My Past Work</h2>
              <p className="max-w-[900px] text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black-500">
                Sangheon&apos;s Portfolio
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>C# Development</CardTitle>
                <CardDescription>Game and application development</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  alt="C# Development"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height={310}
                  src="/image.png"
                  width={550}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Planning and Form Creation</CardTitle>
                <CardDescription>Writing proposals for various AI voucher projects</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  alt="AI Planning and Form Creation"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height={310}
                  src="/AIphoto1.png"
                  width={550}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Voucher Business</CardTitle>
                <CardDescription>Collaborating with the Korea Data Industry Promotion Agency</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Data Voucher"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height={310}
                  src="/Data.png"
                  width={550}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Game Director</CardTitle>
                <CardDescription>Game development and planning using Unity 2D</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Chatbot Application"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height={310}
                  src="/GameDirector.png"
                  width={550}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center" id="skills">
        <div className="w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-600">Skills</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Technical Abilities</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have expertise in a variety of technologies and tools for game development and AI development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-2">
              <CodeIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-bold">Unity2D Development</h3>
              <p className="text-gray-500 dark:text-gray-400">Game Programmer, Game Director</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <DatabaseIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-bold">Prompt Engineer</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Designing optimal input sentences to get accurate and useful outputs from AI models
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <CloudIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-bold">
                Document Management and Version Control
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Creating and managing public documents and managing file versions
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t flex items-center justify-center" id="contact">
        <div className="w-full max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-600">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Feel free to reach out if you have any questions or would like to discuss a project.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
              <Button type="submit" className="bg-gray-800 text-white hover:bg-gray-900 focus-visible:ring-gray-900">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
        >
          <Image src="/go-to-top.png" alt="Go to Top" width={24} height={24} />
        </button>
      )}
    </div>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
