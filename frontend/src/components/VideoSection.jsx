function VideoSection() {
  return (
    <div className="flex flex-col items-center justify-center m-2 mx-25 w-4/5 bg-gray-100 p-4 rounded-xl shadow-md border border-gray-300">
  <h1 className="text-2xl font-bold mb-4">Video Section</h1>
  <div className="relative w-full max-w-2xl aspect-video">
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border border-gray-300 mx-w-full mx-h-full p-5"
      src="https://www.youtube-nocookie.com/embed/KUO2s4Ib4zM?si=s8m0zw2Ul6UXotcdQ"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</div>
  )

}

export default VideoSection;
