import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Prompt from "@/components/Prompt";
import Cards from "@/components/Cards";
import { useColorScheme } from "@/hooks/useColorScheme";
import Logo from "@/components/svgs/Logo";

const { width, height } = Dimensions.get("window");

const Home = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <SafeAreaView style={[styles.safeArea, isDarkMode && styles.darkMode]}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Logo style={styles.logo} />
          <View style={styles.title}>
            <Text
              style={[styles.titleText, isDarkMode && styles.darkTitleText]}
            >
              ChatSphere
            </Text>
          </View>
          <Prompt />
          <Cards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  darkMode: {
    backgroundColor: "#333",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: width * 0.04, // 4% of screen width
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: height * 0.05, // 5% of screen height
  },
  title: {
    flexDirection: "row", // Change to 'row' to align items horizontally
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height * 0.03, // 3% of screen height
    width: "100%",
  },
  logo: {
    width: width * 0.2, // 20% of screen width
    height: width * 0.2, // Maintain aspect ratio
    marginRight: width * 0.02, // 2% of screen width
  },
  titleText: {
    fontSize: width * 0.1, // 10% of screen width
    color: "#FF4949",
    fontFamily: "Inder_400Regular",
    fontWeight: "bold",
    textAlign: "center",
  },
  darkTitleText: {
    color: "#fff",
  },
});

export default Home;
