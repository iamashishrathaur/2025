import React, { useRef } from 'react';
import SliderCaptcha from 'rc-slider-captcha';
import { createPuzzle } from 'create-puzzle'; 
import DemoImage from '../assets/team_bg.png'; // Replace with your actual image path

const SliderPuzzleCaptcha = () => {
  const offsetXRef = useRef(0);

  const handleRequest = async () => {
    try {
      const puzzleData = await createPuzzle(DemoImage, { format: 'blob' }); // Specify the format ('blob' or 'dataURL')
      offsetXRef.current = puzzleData.x; // Store the expected x-offset
      return {
        bgUrl: puzzleData.bgUrl,
        puzzleUrl: puzzleData.puzzleUrl,
      };
    } catch (error) {
      console.error('Error generating puzzle:', error);
      return Promise.reject(new Error('Failed to load puzzle.'));
    }
  };

  const handleVerify = async (data) => {
    console.log('Verification Data:', data);
    const tolerance = 6; // Allowable offset difference
    if (
      data.x >= offsetXRef.current - tolerance &&
      data.x <= offsetXRef.current + tolerance
    ) {
      return Promise.resolve(); // Verification successful
    }
    return Promise.reject(new Error('Verification failed.')); // Verification failed
  };

  return (
    <SliderCaptcha
      request={handleRequest}
      onVerify={handleVerify}
      bgSize={{ width: 480, height:260 }} // Set the background size
     // Optional delay to simulate loading experience
    />
  );
};

export default SliderPuzzleCaptcha;
