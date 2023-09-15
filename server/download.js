import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoUrl = "https://www.youtube.com/watch?=" + videoId
  console.log("Realizando download do vídeo..." + videoId)

  ytdl(videoUrl, { quality: "lowestaudio", filter: "audioonly" }).on(
    "info",
    (info) => {
      const seconds = info.formats[0].aproxDurationMs / 1000
      console.log(seconds)
    }
  )
}
