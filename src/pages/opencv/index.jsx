// function OpenCV() {
//   const startHandTracking = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/start-hand-tracking");

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error iniciando OpenCV:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <button
//         onClick={startHandTracking}
//         className="p-4 bg-blue-500 text-white"
//       >
//         Iniciar Seguimiento de Manos
//       </button>
//     </div>
//   );
// }

// export default OpenCV;
"use client";

import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

export default function OpenCV() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.on("processed_frame", (data) => {
      console.log("Imagen procesada recibida:", data);
      setProcessedImage(data);
    });

    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => console.error("Error al acceder a la cámara:", error));
  }, []);

  const sendFrame = () => {
    if (!videoRef.current || !canvasRef.current || !socket) return;

    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    ctx.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );

    const imageData = canvasRef.current.toDataURL("image/jpeg");
    if (imageData.startsWith("data:image/jpeg;base64,")) {
      socket.emit("frame", imageData);
    }
  };

  useEffect(() => {
    const interval = setInterval(sendFrame, 100);
    return () => clearInterval(interval);
  }, [socket]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-lg font-bold">WebCam con OpenCV</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-1/2 rounded-lg border"
      />
      <canvas ref={canvasRef} className="hidden"></canvas>
      <div className="w-1/2 rounded-lg border">
        {processedImage ? (
          <img src={processedImage} alt="Processed" />
        ) : (
          <p className="text-gray-500">Esperando imagen procesada...</p>
        )}
      </div>
    </div>
  );
}
