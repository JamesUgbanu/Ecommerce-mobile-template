import React, { useRef } from 'react';
import { View, PanResponder, Dimensions } from 'react-native';
import { styles } from './styles';


const DraggableResizableBox = () => {
  const cardRef = useRef(null);
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  // Initial card dimensions
  const initialWidth = screenWidth * 0.6;
  const initialHeight = screenHeight * 0.2;

  // Initialize state for card dimensions
  const [cardWidth, setCardWidth] = React.useState(initialWidth);
  const [cardHeight, setCardHeight] = React.useState(initialHeight);

  // Initialize PanResponder
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      // Calculate the new card dimensions based on the gesture distance
      const newWidth = Math.max(initialWidth, cardWidth - gestureState.dx);
      const newHeight = Math.max(initialHeight, cardHeight + gestureState.dy);
      setCardWidth(newWidth);
      setCardHeight(newHeight);
    },
  });

  return (
    <View style={styles.container}>
      <View
        ref={cardRef}
        style={[styles.card, { width: cardWidth, height: cardHeight }]}
        {...panResponder.panHandlers}>
      </View>
    </View>
  );
  };
  
  export default DraggableResizableBox;
  