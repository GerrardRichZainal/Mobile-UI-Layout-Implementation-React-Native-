import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2ec4b6" barStyle="light-content" />

      {/* CYAN ATAS */}
      <View style={styles.topMargin} />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* PROFILE */}
        <View style={styles.profileSection}>
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Gerrard Zainal</Text>
        </View>

        {/* BUTTON 1 & 2 */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tabButton1}
            onPress={() => showModal("Button 1 Pressed")}
          >
            <Text style={styles.tabText}>Button 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButton2}
            onPress={() => showModal("Button 2 Pressed")}
          >
            <Text style={styles.tabText}>Button 2</Text>
          </TouchableOpacity>
        </View>

        {/* CYAN DI BAWAH BUTTON */}
        <View style={styles.middleMargin} />

        {/* GRID */}
        <View style={styles.gridContainer}>
          <Image source={require("../../assets/images/rendang.jpg")} style={styles.gridImage} />
          <Image source={require("../../assets/images/sate.jpg")} style={styles.gridImage} />
          <Image source={require("../../assets/images/pecel.jpg")} style={styles.gridImage} />
          <Image source={require("../../assets/images/nasgor.jpeg")} style={styles.gridImage} />
          <Image source={require("../../assets/images/tumpeng.jpg")} style={styles.gridImage} />
          <Image source={require("../../assets/images/campur.jpg")} style={styles.gridImage} />
        </View>

      </ScrollView>

      {/* BOTTOM BUTTON */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => showModal("Bottom Button Pressed")}
      >
        <Text style={styles.bottomText}>Bottom Button</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal transparent animationType="fade" visible={modalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Notifikasi</Text>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* ===== MARGIN CYAN ===== */

  topMargin: {
    height: 22,
    backgroundColor: "#2ec4b6",
  },

  middleMargin: {
    height: 22,
    backgroundColor: "#2ec4b6",
    marginBottom: 25,
  },

  /* ===== PROFILE ===== */

  profileSection: {
    alignItems: "center",
    marginTop: 35,
    marginBottom: 35,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  username: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },

  /* ===== BUTTON TAB ===== */

  tabContainer: {
    flexDirection: "row",
  },

  tabButton1: {
    flex: 1,
    backgroundColor: "#7b2cbf",
    paddingVertical: 20,
    alignItems: "center",
  },

  tabButton2: {
    flex: 1,
    backgroundColor: "#4a90e2",
    paddingVertical: 20,
    alignItems: "center",
  },

  tabText: {
    color: "white",
    fontWeight: "bold",
  },

  /* ===== GRID ===== */

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingVertical: 30,
  },

  gridImage: {
    width: 110,
    height: 110,
    borderRadius: 15,
    marginBottom: 25,
  },

  /* ===== BOTTOM BUTTON ===== */

  bottomButton: {
    backgroundColor: "#4a90e2",
    paddingVertical: 25,
    alignItems: "center",
  },

  bottomText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* ===== MODAL ===== */

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },

  closeButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  closeText: {
    color: "white",
    fontWeight: "bold",
  },
});