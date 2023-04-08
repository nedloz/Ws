import { View, Text, TouchableOpacity } from 'react-native';

export default function CatalogItem({ item }) {
  return (

    <View>
      <Text>{item.title}</Text>
    </View>

  );
}
