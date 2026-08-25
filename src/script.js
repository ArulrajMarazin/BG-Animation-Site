const bgFrame = document.getElementById("bgFrames");

console.log(bgFrame);

const totalFrames = 190;

window.addEventListener("scroll", () =>{
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / maxScroll;
    const frameIndex = Math.floor(progress * (totalFrames - 1));
    const frameNumber = String(frameIndex + 1).padStart(3, "0");
    bgFrame.src = `./frames/converted/frame_${frameNumber}_result.webp`;
});