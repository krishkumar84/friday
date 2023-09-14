import 'regenerator-runtime';
import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import io from 'socket.io-client';

const Dictaphone = () => {
  const {
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);
  const socket = io('http://localhost:8080'); // Replace with your server's URL.

  useEffect(() => {
    return () => {
      // Clean up the socket connection when the component unmounts.
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (finalTranscript) {
      // Send finalTranscript to the WebSocket server using Socket.io.
      socket.emit('transcript', finalTranscript);

      // Clear the final transcript after sending it.
      resetTranscript();
    }
  }, [finalTranscript, resetTranscript, socket]);

  const handleStartListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: false, // Automatically stops listening after input ends
      language: 'en-IN',
    });
  };

  const handleStopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const handleResetTranscript = () => {
    resetTranscript();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {isListening ? 'on' : 'off'}</p>
      <button onClick={handleStartListening} disabled={isListening}>
        Start
      </button>
      <button onClick={handleStopListening} disabled={!isListening}>
        Stop
      </button>
      <button onClick={handleResetTranscript}>Reset</button>
      <p>Final Transcript: {finalTranscript}</p>
    </div>
  );
};

export default Dictaphone;
