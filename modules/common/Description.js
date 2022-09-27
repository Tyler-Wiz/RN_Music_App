import { StyleSheet, Text } from "react-native";

export const Description = ({ title, size, align, margin }) => {
  return (
    <Text
      style={[
        styles.description,
        { fontSize: size, textAlign: align, marginVertical: margin },
      ]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    color: "white",
    fontFamily: "Poppins500",
  },
});
