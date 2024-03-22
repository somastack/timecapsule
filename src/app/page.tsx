import Image from "next/image";
import { portal } from "@/components/portal"; 
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Home() {
  return (
        <div className="w-full grid min-h-[400px] gap-6 lg:grid-cols-3 lg:gap-10">
      <div className="space-y-4 lg:col-span-2 lg:space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">How to prepare for the upcoming season</h1>
          <p className="text-gray-500 grid-cols-2 gap-2 dark:text-gray-400">
            <span>By: </span>
            <span>John Doe</span>
            <span>Published: </span>
            <span>2 hours ago</span>
          </p>
        </div>
        <div className="space-y-4">
          <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-800" />
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Transcription</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Key Points</h2>
            <ul className="grid gap-2">
              <li>
                <strong>Q:</strong>
                How can I prepare for the upcoming season?{"\n"}
                <br />
                <strong>A:</strong>
                You can start by practicing your skills every day.
              </li>
              <li>
                <strong>Q:</strong>
                What are some tips for improving my game?{"\n"}
                <br />
                <strong>A:</strong>
                Focus on your strengths and work on your weaknesses.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-4 lg:gap-6">
        <Card className="bg-gray-100 dark:bg-gray-800">
          <CardContent className="p-4">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">Select a video</h2>
              <ul className="grid gap-2">
                <li className="flex items-center space-x-2">
                  <img
                    alt="Thumbnail"
                    className="rounded-md object-cover"
                    height="68"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "120/68",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                  <Button size="sm">Watch</Button>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    alt="Thumbnail"
                    className="rounded-md object-cover"
                    height="68"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "120/68",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                  <Button size="sm">Watch</Button>
                </li>
                <li className="flex items-center space-x-2">
                  <img
                    alt="Thumbnail"
                    className="rounded-md object-cover"
                    height="68"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "120/68",
                      objectFit: "cover",
                    }}
                    width="120"
                  />
                  <Button size="sm">Watch</Button>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
