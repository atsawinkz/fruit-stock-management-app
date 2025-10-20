import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, Image,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("ข้อผิดพลาด", "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    if (username === "admin" && password === "admin") {
      Alert.alert(
        "สำเร็จ",
        "เข้าสู่ระบบเรียบร้อยแล้ว",
        [
          {
            text: "OK",
            onPress: () =>
              navigation.navigate("FruitList", {
                username: username,
                password: password,
              }),
          },
        ]
      );
    } else {
      Alert.alert("ล้มเหลว", "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* -------------------- Swiper Section -------------------- */}
        <View style={styles.swiperOuterContainer}>
          <Swiper
            autoplay
            loop
            showsPagination
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            paginationStyle={styles.paginationStyle}
          >
            
            <View style={styles.slide}>
              <Image source={require("../assets/pic1.png")} style={styles.image} />
              <Text style={styles.caption}>ผลไม้สดจากสวน</Text>
            </View>
            <View style={styles.slide}>
              <Image source={require("../assets/pic2.png")} style={styles.image} />
              <Text style={styles.caption}>ทุเรียนราชาแห่งผลไม้</Text>
            </View>
            <View style={styles.slide}>
              <Image source={require("../assets/pic3.png")} style={styles.image} />
              <Text style={styles.caption}>มะม่วงหวานน้ำผึ้ง</Text>
            </View>
          </Swiper>
        </View>

        {/* -------------------- Login Form -------------------- */}
        <View style={styles.formContent}> 
            <Text style={styles.title}>เข้าสู่ระบบ</Text>
            <TextInput
                style={styles.input}
                placeholder="ชื่อผู้ใช้"
                placeholderTextColor="#9ca3af"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="รหัสผ่าน"
                placeholderTextColor="#9ca3af"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingTop: 0,
  },
  
  // -------------------- Swiper Styles --------------------
  swiperOuterContainer: {
    width: "90%",
    height: 220,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 30,
    marginTop: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  caption: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    textAlign: "center",
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  paginationStyle: {
    bottom: 5,
  },

  // -------------------- Form Styles --------------------
  formContent: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 55, 
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingHorizontal: 18,
    marginBottom: 20,
    backgroundColor: "#fff",
    color: "#333",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#2563eb",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LoginScreen;