import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useEffect } from "react";
import { Button, Text, TouchableOpacity, View, Animated } from "react-native";

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanAnimation] = useState(new Animated.Value(0));
  const [data, setData] = useState(null);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(scanAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="justify-center flex-1">
        <Text className="pb-4 text-center">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    console.log("toggle facing");
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const BarcodeScanningResult = (e: any) => {
    const data = e.data;
    const type = e.type;
    setData(data);
    console.log({ "data:": data, "type:": type });
  };

  const scanLineStyle = {
    transform: [
      {
        translateY: scanAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 250],
        }),
      },
    ],
  };

  return (
    <View className="flex-1">
      <CameraView
        active
        style={{ height: "80%" }}
        autofocus={"on"}
        videoStabilizationMode="auto"
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={BarcodeScanningResult}
      >
        <View className="items-center justify-center flex-1">
          <View className="relative w-3/4 border border-green-500 aspect-square">
            <Animated.View
              style={[
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: "green",
                },
                scanLineStyle,
              ]}
            />
          </View>
        </View>
      </CameraView>
      <View className="items-center justify-center h-20">
        <Text className="text-lg">{data}</Text>
      </View>
    </View>
  );
}
