"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { useLoginWithAbstract } from "@abstract-foundation/agw-react"
import { useAccount, useWriteContract } from "wagmi"
import { parseAbi } from "viem"

export default function DeletePage() {
  const [shortUrl, setShortUrl] = useState("")
  const [error, setError] = useState("")
  const {login} = useLoginWithAbstract()
  const {address} = useAccount()
  const {writeContract} = useWriteContract()


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!shortUrl) {
      setError("Please enter a short URL to delete.")
      return
    }

    if (!/^[a-zA-Z0-9-]+$/.test(shortUrl)) {
      setError("Short URL can only contain letters, numbers, and hyphens.")
      return
    }

    if(address){
        writeContract({
            abi: parseAbi(["function deleteLink(string calldata shortLink) external"]),
            address: "0x47a2A8E0E99C070cEF44e3Fc22CFc8d976E16242",
            functionName: "deleteLink",
            args: [shortUrl]
        })
    }else{
        alert(`Login, account not connected.`)
        login();
    }

    // Here you would typically call your API to delete the short link
    // For this example, we'll just show a success message
    toast.success(`Link ${shortUrl} deleted successfully!`)
    setShortUrl("")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#00796B]">Delete Short Link</h1>
          <p className="mt-2 text-xl text-muted-foreground">Remove a shortened link from the system</p>
          <Badge variant="secondary" className="mt-4 bg-[#4CAF50] text-white">
            Powered by Abstract Network
          </Badge>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <Label htmlFor="shortUrl" className="block text-sm font-medium text-foreground mb-1">
              Short URL to delete
            </Label>
            <Input
              id="shortUrl"
              name="shortUrl"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-foreground focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="my-custom-url"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
            />
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00796B] hover:bg-[#00796B]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CAF50]"
            >
              Delete Link
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/" className="text-[#00796B] hover:text-[#4CAF50]">
            Back to Home
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-4 text-sm ">Created with ❤️ by <a href="https://www.github.com/anoop04singh">0xAnoop</a></footer>
    </div>
  )
}

