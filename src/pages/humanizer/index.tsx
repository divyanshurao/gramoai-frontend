import React, { useState } from 'react';
import { humanizer } from '../../api/ai';
import Navbar from '../../components/navbar';

const Humanizer: React.FC = () => {
  const [inputText, setInputText] = useState("Curious about our SaaS product and how it can help you revolutionize your email marketing strategy? Here's what you can expect:     🚀 Easy integration with your existing email service provider     🤖 AI-powered automation and personalization     📊 Advanced analytics and reporting     📈 Scalability and growth     📞 Dedicated customer support.     Get ready to take your email marketing to the next level! #EmailMarketing #AI #SaaS");
  const [outputText, setOutputText] = useState('');
  const [inputWordCount, setInputWordCount] = useState(0);
  const [outputWordCount, setOutputWordCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
    setInputWordCount(text.trim() === '' ? 0 : text.trim().split(/\s+/).length);
  };

  const handleHumanize = async() => {

        try {
            const response = await humanizer(inputText);
            setOutputText(response);
            setOutputWordCount(response.trim().split(/\s+/).length);
        } catch (error) {
            console.error('Error humanizing text:', error);
        }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
  };

  return (
    <div className='bg-gradient-to-b from-[#5753f2]/5 to-white mx-auto'>
       <Navbar/>
    <div className="w-full h-screen bg-gradient-to-b from-[#5753f2]/5 to-white relative flex justify-center items-center overflow-hidden">
    <div className="absolute top-10 left-0 w-full flex justify-center items-center h-16 z-20 font-primary">
        <h2 className="text-indigo-600 text-4xl font-bold">AI Humanizer</h2>
    </div>
      {/* Starry background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(indigo 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Main container */}
      <div className="flex w-full max-w-6xl h-96 gap-5 z-10 px-5">
        {/* Left panel */}
        <div className="flex-1 flex flex-col border border-zinc-600 rounded-lg overflow-hidden bg-indigo-200">
          <textarea
            className="flex-1 p-4 bg-transparent text-black text-base resize-none outline-none"
            placeholder="Paste your AI-generated text here"
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="flex justify-between items-center p-2 border-t border-zinc-600 font-primary">
            <div className="bg-white text-black px-2 py-1 rounded-full text-sm font-medium">
              {inputWordCount} words
            </div>
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-zinc-500 transition-colors"
              onClick={handleHumanize}
            >
              Humanize
            </button>
          </div>
        </div>
        
        {/* Right panel */}
        <div className="flex-1 flex flex-col border border-zinc-600 rounded-lg overflow-hidden bg-indigo-200">
          <textarea
            className="flex-1 p-4 bg-transparent text-black text-base resize-none outline-none"
            placeholder="Humanized text will appear here"
            value={outputText}
            readOnly
          />
          <div className="flex justify-between items-center p-2 border-t border-zinc-600 font-primary">
            <div className="bg-white text-black px-2 py-1 rounded-full text-sm font-medium">
              {outputWordCount} words
            </div>
            <button 
              className="border bg-white border-white text-black px-3 py-1 rounded flex items-center gap-1  transition-colors"
              onClick={handleCopy}
            >
              <span className="text-base">⎘</span> copy
            </button>
          </div>
        </div>
      </div>
    </div>
    
</div>
  );
};

export default Humanizer;