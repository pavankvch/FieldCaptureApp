import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop: 40
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    permissionText: {
      marginBottom: 16,
      fontSize: 16,
    },
    fab: {
      position: "absolute",
      bottom: 50,
      right: 20,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: "#1976D2",
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
    },
    fabText: {
      color: "#fff",
      fontSize: 28,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      padding: 20,
    },
    modalContainer: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 20,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 15,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
    },
    saveButton: {
      backgroundColor: "#1976D2",
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
    },
    saveButtonText: {
      color: "#fff",
      fontWeight: "600",
    },
    labelText: {
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 4,
    },
    cameraContainer: {
      height: 350,
      margin: 10,
      overflow: "hidden",
      borderRadius: 12,
    },
    camera: {
      flex: 1,
    },
    captureButton: {
      backgroundColor: "#1976D2",
      marginHorizontal: 16,
      padding: 14,
      borderRadius: 10,
      alignItems: "center",
    },
    captureButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
    heading: {
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 16,
      marginTop: 16,
      marginBottom: 8,
    },
    captureFab: {
      position: "absolute",
      bottom: 40,
      alignSelf: "center",
    },
    captureCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "white",
      borderWidth: 5,
      borderColor: "#ddd",
    },
    closeButton: {
      position: "absolute",
      top: 60,
      right: 20,
      backgroundColor: "rgba(0,0,0,0.6)",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
    },
    listContainer: {
      paddingHorizontal: 16,
      paddingBottom: 30,
    },
    photoItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
      padding: 10,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
    },
  
    thumbnail: {
      width: 70,
      height: 70,
      borderRadius: 8,
    },
  
    photoInfo: {
      flex: 1,
      marginLeft: 12,
    },
  
    dateText: {
      fontWeight: "600",
      marginBottom: 4,
    },
  
    pathText: {
      fontSize: 12,
      color: "#666",
    },
  
    deleteButton: {
      backgroundColor: "#E53935",
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 6,
    },
  
    deleteButtonText: {
      color: "#fff",
      fontWeight: "600",
    },
  
    button: {
      backgroundColor: "#1976D2",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
    },
  
    buttonText: {
      color: "#fff",
      fontWeight: "600",
    },
  });