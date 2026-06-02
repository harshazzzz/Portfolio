"use client";

type DownloadCvButtonProps = {
  className: string;
};

const cvFiles = [
  {
    href: "/cv/harshana-cv.pdf",
    filename: "Harshana-Karunarathna-CV.pdf",
  },
  {
    href: "/cv/harshana-cv.png",
    filename: "Harshana-Karunarathna-CV.png",
  },
];

export function DownloadCvButton({ className }: DownloadCvButtonProps) {
  function downloadCvFiles() {
    cvFiles.forEach((file, index) => {
      window.setTimeout(() => {
        const link = document.createElement("a");
        link.href = file.href;
        link.download = file.filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }, index * 250);
    });
  }

  return (
    <button type="button" onClick={downloadCvFiles} className={className}>
      Download CV
    </button>
  );
}
