import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.content}>
        {/* Hàng 1: Ô 1 (Xanh dương) & Ô 2 (Đỏ) */}
        <View style={styles.row}>
          <View style={[styles.box, { backgroundColor: '#1976D2' }]}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={[styles.box, { backgroundColor: '#E53935' }]}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>

        {/* Hàng 2: Ô 3, 4 (nửa trái) & Ô 5 (nửa phải) */}
        <View style={styles.row}>
          <View style={styles.halfLeft}>
            <View style={[styles.box, { backgroundColor: '#FFC107' }]}>
              <Text style={[styles.text, { color: 'black' }]}>3</Text>
            </View>
            <View style={[styles.box, { backgroundColor: '#43A047' }]}>
              <Text style={styles.text}>4</Text>
            </View>
          </View>
          <View style={[styles.box, { backgroundColor: '#7B1FA2' }]}>
            <Text style={styles.text}>5</Text>
          </View>
        </View>

        {/* Hàng 3: Ô 6 (Cam) */}
        <View style={[styles.box, { backgroundColor: '#FF9800', flex: 0.8 }]}>
          <Text style={styles.text}>6</Text>
        </View>
      </View>

      {/* Footer: Họ tên - MSSV */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Nguyễn Đức Khiêm-BIT240125</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 12, // Khoảng cách giữa các hàng
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    gap: 12, // Khoảng cách giữa các cột
  },
  halfLeft: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  }
});
