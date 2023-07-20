
import * as ImageManipulator from "expo-image-manipulator";

/**
 * Resize photo
 * @param props 
 * @returns resized image
 */
export const resizeImage = async (
  uri: string,
  resize?: {
    width: number,
    height?: number
  }) => {
  resize = { width: 900 };
  const manipResponse = await ImageManipulator.manipulateAsync(
    uri,
    [{ resize: resize }],
    { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
  );

  return { uri: manipResponse.uri };
}