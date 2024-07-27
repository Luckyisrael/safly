import { colors } from 'app/constants/theme';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

export { Container };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme.primary
  },
});
