"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useLoginWithAbstract } from "@abstract-foundation/agw-react"
import { useAccount } from "wagmi"
import { useWriteContract } from "wagmi"
import { contractAbi } from "./abi"


export default function Page() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")
  const [error, setError] = useState("")

  const{login} = useLoginWithAbstract();
  const{address, isConnected} = useAccount();
  const{writeContract} = useWriteContract();

  async function submitTransaction() {
    const txHash = await writeContract({
      abi: contractAbi,
      address: "0x47a2A8E0E99C070cEF44e3Fc22CFc8d976E16242",
      functionName: "shortenLink",
      args: [shortUrl,url]
    });

    console.log(`TxHash ${txHash} url: ${url} shortened to: ${shortUrl}`);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setGeneratedLink("")

    if (!url) {
      setError("Please enter a URL to shorten.")
      return
    }

    if (shortUrl && !/^[a-zA-Z0-9-]+$/.test(shortUrl)) {
      setError("Short URL can only contain letters, numbers, and hyphens.")
      return
    }

    if(!isConnected){
      alert(`Account not Connected. Login and try again.`)
      login();
    }else{
      alert(`Conncted to Account ${address}`);
      console.log(address);
      // const txHash = await writeContract({
      //   abi: contractAbi,
      //   address: "0x47a2A8E0E99C070cEF44e3Fc22CFc8d976E16242",
      //   functionName: "shortenLink",
      //   args: [shortUrl,url]
      // })
      submitTransaction();
      
    }


    // Here you would typically call your API to create a short link
    // For this example, we'll just use the provided short URL or generate a random string
    // const finalShortUrl = shortUrl || Math.random().toString(36).substring(7)
    // setGeneratedLink(`${window.location.origin}/${finalShortUrl}`)
    // toast.success("Link shortened successfully!")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary">Abstract Link Shortener</h1>
          <p className="mt-2 text-xl text-muted-foreground">Shorten your links on chain with Abstract</p>
          <Badge variant="secondary" className="mt-4">
            Powered by Abstract Testnet
          </Badge>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="url" className="block text-sm font-medium text-foreground mb-1">
                URL to shorten
              </Label>
              <Input
                id="url"
                name="url"
                type="url"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-foreground focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="shortUrl" className="block text-sm font-medium text-foreground mb-1">
                Custom short URL (optional)
              </Label>
              <Input
                id="shortUrl"
                name="shortUrl"
                type="text"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-foreground focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="my-custom-url"
                value={shortUrl}
                onChange={(e) => setShortUrl(e.target.value)}
              />
              <p className="mt-1 text-sm text-muted-foreground">Leave blank for a randomly generated short URL</p>
            </div>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Shorten Link
            </Button>
          </div>
        </form>
        {generatedLink && (
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">Your shortened link:</p>
            <a
              href={generatedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              {generatedLink}
            </a>
          </div>
        )}
      </div>
      <footer className="absolute bottom-4 text-sm ">Created with ❤️ by <a href="https://www.github.com/anoop04singh">0xAnoop</a></footer>
    </div>
  )
}

