import { Loader, PerformanceMonitor, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
import { Experience } from "./Components/Experience";
import { Leaderboard } from "./Components/Leaderboard";

import { HuddleClient, HuddleProvider } from "@huddle01/react";

import { AccessToken, Role } from "@huddle01/server-sdk/auth";

import { useRoom } from "@huddle01/react/hooks";

const huddleClient = new HuddleClient({
  projectId: "64oMGEVTnuPWGxDY-MGTKlLQe7xLje4f",
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

function App() {
  const [downgradedPerformance, setDowngradedPerformance] = useState(false);

  return (
    <HuddleProvider key="huddle01-provider" client={huddleClient}>
      <div className="root">
        <Loader />
        <Canvas
          shadows
          camera={{ position: [0, 30, 0], fov: 30, near: 2 }}
          dpr={[1, 1.5]}
        >
          <color attach="background" args={["#242424"]} />
          <SoftShadows size={42} />

          <PerformanceMonitor
            onDecline={(fps) => {
              setDowngradedPerformance(true);
            }}
          />
          <Suspense>
            <Physics>
              <Experience downgradedPerformance={downgradedPerformance} />
            </Physics>
          </Suspense>
          {!downgradedPerformance && (
            <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={1} intensity={1.5} mipmapBlur />
            </EffectComposer>
          )}
        </Canvas>
        <Leaderboard />
      </div>
    </HuddleProvider>
  );
}

export default App;
