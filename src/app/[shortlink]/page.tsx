"use client"

import { useEffect, useState } from "react"
import {  useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useReadContract } from "wagmi"
import { parseAbi } from "viem"


export default function ShortLinkPage({ params }: { params: { shortlink: string } }) {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)
  const shortlink = params.shortlink;

  const {data} = useReadContract({
    address: "0x47a2A8E0E99C070cEF44e3Fc22CFc8d976E16242",
    abi: parseAbi(["function getFullLink(string calldata shortLink) external view returns (string memory)"]),
    functionName: "getFullLink",
    args: [shortlink]
  })





  useEffect(() => {
    if (data) {
      console.log(`Contract data fetched: ${data}`);

      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            console.log(`Redirecting to: ${data}`);
            router.push(data); // Redirect to the URL from the contract
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer when the component unmounts
    }
  }, [data, router]); // Re-run this effect whenever `data` changes


  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-5xl font-bold mb-4 text-primary">Redirecting you shortly</h1>
        <p className="text-xl text-muted-foreground mb-8">Your link: /{params.shortlink}</p>
        <Badge variant="secondary" className="text-lg py-1 px-3">
          Deployed on Abstract Network
        </Badge>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-12"
      >
        <svg className="w-32 h-32 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>
      </motion.div>
      <motion.p
        className="text-3xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Redirecting in {countdown} seconds...
      </motion.p>
      <Button variant="outline" className="mt-8" onClick={() => router.push("/")}>
        Back to Home
      </Button>
      <footer className="absolute bottom-4 text-sm ">Created with ❤️ by <a href="https://www.github.com/anoop04singh">0xAnoop</a></footer>
    </div>
  )
}

