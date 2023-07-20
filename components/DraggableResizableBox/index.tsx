import React, { useRef } from 'react';
import { View, PanResponder, Dimensions } from 'react-native';
import { styles } from './styles';

type DraggableResizableBoxProps = {
  cardWidth: number;
  cardHeight: number;
  setCardWidth: (width: number) => void;
  setCardHeight: (width: number) => void;
  initialWidth?: number;
  initialHeight?: number;
};

const DraggableResizableBox = (props: DraggableResizableBoxProps) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const {
    cardWidth, cardHeight, setCardWidth, setCardHeight,
    initialWidth = screenWidth * 0.6, initialHeight = screenHeight * 0.2
  } = props;
  const cardRef = useRef(null);

  // Initialize PanResponder
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
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
