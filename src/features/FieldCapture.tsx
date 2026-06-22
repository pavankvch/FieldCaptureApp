import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput,
  ListRenderItem,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";
import { CapturedPhoto } from "../database/types";
import { PhotoRepository } from "../database/photoRepository";
import { initializeDatabase } from "../database/database";
import { formatDate } from "../utils/dateUtils";




export const FieldCapture = () => {
  const cameraRef = useRef<CameraView>(null);

  const [permission, requestPermission] = useCameraPermissions();
  const [photos, setPhotos] = useState<CapturedPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCamera, setShowCamera] = useState(false);
  const [showLabelModal, setShowLabelModal] = useState(false);
const [label, setLabel] = useState("");
const [pendingPhoto, setPendingPhoto] = useState<{
  uri: string;
  capturedAt: string;
} | null>(null);

  useEffect(() => {
    initializeDatabase();
  
    const data = PhotoRepository.getAll();
    setPhotos(data);
  
    setLoading(false);
  }, []);


  const capturePhoto = async () => {
    if (!cameraRef.current) return;
  
    const capturedAt = new Date().toISOString();
  
    const photo = await cameraRef.current.takePictureAsync();
  
    if (!photo?.uri) return;
  
    setPendingPhoto({
      uri: photo.uri,
      capturedAt,
    });
  
    setShowCamera(false);
    setShowLabelModal(true);
  };


  const deletePhoto = (id: string) => {
    try {
      PhotoRepository.delete(id);

      setPhotos((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to delete photo");
    }
  };

  if (!permission) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.permissionText}>Camera permission is required</Text>

        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (showCamera) {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <CameraView ref={cameraRef} style={{ flex: 1 }} facing="back" />

        <TouchableOpacity style={styles.captureFab} onPress={capturePhoto}>
          <View style={styles.captureCircle} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setShowCamera(false)}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }


  const savePhotoWithLabel = () => {
    if (!pendingPhoto) return;
  
    const trimmedLabel = label.trim();
  
    if (!trimmedLabel) {
      Alert.alert("Label Required", "Please enter a label.");
      return;
    }
  
    const photoRecord: CapturedPhoto = {
      id: Date.now().toString(),
      localPath: pendingPhoto.uri,
      capturedAt: pendingPhoto.capturedAt,
      label: trimmedLabel,
    };

    PhotoRepository.insert(photoRecord);

    setPhotos(prev => [photoRecord, ...prev]);
  
    setPendingPhoto(null);
    setLabel("");
    setShowLabelModal(false);
  };


  const renderCaptureItem : ListRenderItem<CapturedPhoto>= ({item}) =>{
    
    return(
      <View style={styles.photoItem}>
      <Image source={{ uri: item.localPath }} style={styles.thumbnail} />

      <View style={styles.photoInfo}>
        <Text style={styles.labelText}>{item.label}</Text>

        <Text style={styles.dateText}>{formatDate(item.capturedAt)}</Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deletePhoto(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>Captured Photos ({photos.length})</Text>

      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={renderCaptureItem}
      />

      <TouchableOpacity style={styles.fab} onPress={() => setShowCamera(true)}>
        <Text style={styles.fabText}>📷</Text>
      </TouchableOpacity>

      <Modal visible={showLabelModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Enter Photo Label</Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. Front tyre"
              value={label}
              onChangeText={setLabel}
              autoFocus
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={savePhotoWithLabel}
            >
              <Text style={styles.saveButtonText}>Save Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


