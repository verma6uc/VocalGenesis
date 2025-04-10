import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, UserPlus, Upload, RefreshCw } from 'lucide-react';

type VoiceOption = {
  id: string;
  name: string;
  language: string;
  accent: string;
  gender: 'male' | 'female';
};

type EmotionOption = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const voiceOptions: VoiceOption[] = [
  { id: 'sarah', name: 'Sarah', language: 'English', accent: 'American', gender: 'female' },
  { id: 'michael', name: 'Michael', language: 'English', accent: 'British', gender: 'male' },
  { id: 'yuki', name: 'Yuki', language: 'Japanese', accent: 'Tokyo', gender: 'female' },
  { id: 'carlos', name: 'Carlos', language: 'Spanish', accent: 'Castilian', gender: 'male' },
  { id: 'elena', name: 'Elena', language: 'Russian', accent: 'Moscow', gender: 'female' },
  { id: 'custom', name: 'Custom Voice', language: 'Any', accent: 'Custom', gender: 'female' },
];

const emotionOptions: EmotionOption[] = [
  { id: 'neutral', name: 'Neutral', icon: <span className="text-xl">😐</span> },
  { id: 'happy', name: 'Happy', icon: <span className="text-xl">😊</span> },
  { id: 'excited', name: 'Excited', icon: <span className="text-xl">🤩</span> },
  { id: 'sympathetic', name: 'Sympathetic', icon: <span className="text-xl">🥺</span> },
  { id: 'professional', name: 'Professional', icon: <span className="text-xl">👨‍💼</span> },
];

const DemoSection: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState(voiceOptions[0]);
  const [selectedEmotion, setSelectedEmotion] = useState(emotionOptions[0]);
  const [inputText, setInputText] = useState("Hello! I'm VoiceBox, your AI voice assistant. I can help with customer support, content creation, healthcare communications, and more. Try changing my voice and emotion to see what I can do!");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger the audio playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-white" id="demo-section">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Interactive Demo</span>
          </h2>
          <p className="text-neutral-medium max-w-2xl mx-auto">
            Experience VoiceBox firsthand. Select a voice, choose an emotion, and hear the technology in action.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto glass-card p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Controls */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-6">Voice Configuration</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-dark mb-2">Select Voice</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {voiceOptions.map((voice) => (
                    <button
                      key={voice.id}
                      className={`p-3 text-center rounded-lg text-sm transition-all ${
                        selectedVoice.id === voice.id
                          ? 'bg-primary text-white shadow-glow'
                          : 'bg-neutral-light/80 text-neutral-dark hover:bg-neutral-light'
                      }`}
                      onClick={() => setSelectedVoice(voice)}
                    >
                      <div className="font-semibold mb-1">{voice.name}</div>
                      <div className="text-xs opacity-80">{voice.language}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-dark mb-2">Select Emotion</label>
                <div className="flex flex-wrap gap-2">
                  {emotionOptions.map((emotion) => (
                    <button
                      key={emotion.id}
                      className={`px-4 py-2 rounded-full text-sm flex items-center transition-all ${
                        selectedEmotion.id === emotion.id
                          ? 'bg-secondary text-white shadow-glow'
                          : 'bg-neutral-light/80 text-neutral-dark hover:bg-neutral-light'
                      }`}
                      onClick={() => setSelectedEmotion(emotion)}
                    >
                      <span className="mr-2">{emotion.icon}</span>
                      <span>{emotion.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-dark mb-2">Input Text</label>
                <textarea
                  className="w-full p-3 border border-neutral-medium/20 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none resize-none"
                  rows={4}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                ></textarea>
              </div>
              
              <div className="flex space-x-2">
                <button
                  className="btn-primary flex-1 flex items-center justify-center"
                  onClick={handlePlay}
                  disabled={isPlaying}
                >
                  {isPlaying ? (
                    <RefreshCw size={18} className="mr-2 animate-spin" />
                  ) : (
                    <Play size={18} className="mr-2" />
                  )}
                  {isPlaying ? 'Processing...' : 'Generate Speech'}
                </button>
                <button className="p-2 rounded-full bg-neutral-light hover:bg-neutral-light/80 text-neutral-dark transition-all">
                  <Upload size={18} />
                </button>
              </div>
            </div>
            
            {/* Audio Visualization */}
            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-semibold mb-6">Voice Output</h3>
              
              <div className="flex-grow flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  {isPlaying ? (
                    <div className="flex space-x-1 items-center">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-primary"
                          animate={{
                            height: [5, 15, 5],
                            transition: {
                              repeat: Infinity,
                              duration: 1,
                              delay: i * 0.2,
                            },
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <Volume2 size={32} className="text-primary" />
                  )}
                </div>
                
                <div className="text-center mb-4">
                  <div className="font-heading font-semibold text-lg">
                    {selectedVoice.name}
                  </div>
                  <div className="text-neutral-medium text-sm">
                    {selectedVoice.language} • {selectedEmotion.name}
                  </div>
                </div>
                
                {!isPlaying && (
                  <div className="w-full bg-neutral-light rounded-full h-1.5 mb-4">
                    <div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full w-0"></div>
                  </div>
                )}
                
                {isPlaying && (
                  <div className="w-full flex items-center justify-center space-x-1 mb-4">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-gradient-to-b from-primary to-secondary rounded-full"
                        animate={{
                          height: [
                            Math.random() * 15 + 5,
                            Math.random() * 30 + 10,
                            Math.random() * 15 + 5,
                          ],
                          transition: {
                            repeat: Infinity,
                            duration: 0.8,
                            delay: i * 0.05,
                          },
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <button className="flex items-center text-neutral-medium hover:text-primary transition-colors text-sm mt-2">
                  <UserPlus size={16} className="mr-1" />
                  <span>Save this voice</span>
                </button>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Try these sample phrases:</h4>
                <div className="space-y-2">
                  <button 
                    className="w-full p-2 text-left text-sm rounded bg-neutral-light/80 hover:bg-primary/10 transition-colors"
                    onClick={() => setInputText("Hello, I'm your personal assistant. How can I help you today?")}
                  >
                    "Hello, I'm your personal assistant. How can I help you today?"
                  </button>
                  <button 
                    className="w-full p-2 text-left text-sm rounded bg-neutral-light/80 hover:bg-primary/10 transition-colors"
                    onClick={() => setInputText("I'm sorry to hear you're having trouble with your order. Let me help resolve this issue right away.")}
                  >
                    "I'm sorry to hear you're having trouble with your order. Let me help resolve this issue right away."
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;