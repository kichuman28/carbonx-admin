import '@google/model-viewer';
import { useEffect } from 'react';

export function CarbonXModel({ modelPath, posterPath }) {
  useEffect(() => {
    const modelViewer = document.querySelector('model-viewer');
    
    const handleLoad = () => {
      console.log('Model loaded successfully');
    };

    const handleError = (error) => {
      console.error('Error loading model:', error);
    };

    if (modelViewer) {
      modelViewer.addEventListener('load', handleLoad);
      modelViewer.addEventListener('error', handleError);
    }

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener('load', handleLoad);
        modelViewer.removeEventListener('error', handleError);
      }
    };
  }, []);

  return (
    <div className="model-viewer-container w-full h-full">
      <model-viewer
        src={modelPath}
        poster={posterPath}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        rotation-per-second="15deg"
        interaction-prompt="none"
        camera-orbit="0deg 75deg 105%"
        min-camera-orbit="auto auto 50%"
        max-camera-orbit="auto auto 200%"
        environment-image="neutral"
        skybox-image=""
        shadow-intensity="0"
        exposure="1"
        disable-zoom
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          '--poster-color': 'transparent'
        }}
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button" className="ar-button">
          View in your space
        </button>
        <div id="ar-prompt">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt="AR prompt" />
        </div>
      </model-viewer>

      <style jsx>{`
        .model-viewer-container {
          position: relative;
          overflow: visible;
          background: transparent;
        }

        model-viewer {
          --progress-bar-color: linear-gradient(to right, #76EAD7, #C4FB6D);
          --progress-mask: linear-gradient(to right, transparent 0%, #000 50%, transparent 100%);
          --poster-color: transparent;
          background-color: transparent;
        }

        .progress-bar {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          transition: transform 0.3s;
        }

        .progress-bar.hide {
          transform: translateY(100%);
        }

        .update-bar {
          background: linear-gradient(to right, #76EAD7, #C4FB6D);
          width: 100%;
          height: 100%;
          transform-origin: left;
          animation: update-progress 2s linear infinite;
        }

        @keyframes update-progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        .ar-button {
          background-color: #1E293B;
          border: 2px solid #76EAD7;
          border-radius: 12px;
          color: white;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: absolute;
          bottom: 16px;
          right: 16px;
          z-index: 10;
        }

        .ar-button:hover {
          background-color: #76EAD7;
          color: #1E293B;
          transform: scale(1.05);
        }

        #ar-prompt {
          position: absolute;
          left: 50%;
          bottom: 175px;
          transform: translateX(-50%);
          text-align: center;
          background-color: #1E293B;
          border-radius: 12px;
          border: 2px solid #76EAD7;
          padding: 8px;
          display: none;
        }

        #ar-prompt img {
          width: 32px;
          height: 32px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
} 