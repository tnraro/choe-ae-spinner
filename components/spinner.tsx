import { useEffect, useState } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from "react-native";

interface SpinnerProps {
  image: ImageSourcePropType;
}

export function Spinner(props: SpinnerProps) {
  const [{ rotation }, setTransform] = useState({
    rotation: 0,
    speed: 10000
  });

  useAnimation((dt) => {
    setTransform(x => ({
      rotation: x.rotation + x.speed * dt,
      speed: lerpExp(x.speed, 0, 1)
    }));

    function lerpExp(value: number, target: number, speed: number) {
      return lerp(value, target, 1 - Math.exp(- speed * dt));
    }

    function lerp(a: number, b: number, t: number) {
      return a + t * (b - a);
    }
  });

  return (
    <Pressable onPress={() => {
      setTransform(x => ({
        ...x,
        speed: x.speed + Math.random() * 10000,
      }))
    }}>
      <View style={[styles.container, { transform: [{ rotate: `${rotation}deg` }] }]}>
        <Image source={props.image} style={styles.image} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 320,
    height: 320,
  }
});

function useAnimation(callback: (dt: number) => void) {
  useEffect(() => {
    let isRunning = true;

    let lastTime: number;
    function update(now: number) {
      const dt = delta() / 1000;

      callback(dt);

      lastTime = now;
      if (isRunning) {
        requestAnimationFrame(update);
      }

      function delta() {
        if (lastTime == null) return 16.6;
        return (now - lastTime);
      }
    }

    requestAnimationFrame(update);

    return () => {
      isRunning = false;
    }
  }, []);
}
