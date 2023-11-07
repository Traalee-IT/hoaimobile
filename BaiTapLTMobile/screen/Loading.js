import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Loading = ({  }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
     
    }, 3000); // Thời gian 3 giây
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Spinner visible={isLoading} />
      <Text>Đang tải...</Text>
    </View>
  );
};

export default Loading;