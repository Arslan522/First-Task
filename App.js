import React, { useState, useEffect } from 'react';
import { PaperProvider, Card, Text } from 'react-native-paper';
import { Alert, View, Image, StyleSheet, TouchableOpacity, Avatar, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircularProgress from 'react-native-circular-progress-indicator';



function App() {
  const [value, setValue] = useState(0);
  const img = [
    { uri: require('./assests/imgs/imm.jpg'), key: '1' },
    { uri: require('./assests/imgs/img1.png'), key: '2' },
    { uri: require('./assests/imgs/img2.jpg'), key: '3' },
  ];


  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.cardstyle}>
          <View>
            <Swiper loop={false}>
              {img.map((image, index) => (
                <View style={styles.slide} key={image.key}>
                  <Image
                    style={styles.image}
                    resizeMode="stretch"
                    source={image.uri}
                  />
                  <CountDown
                    style={{
                      marginTop: "15%",
                      position: "absolute",
                      alignSelf: "center"
                    }}
                    size={30}
                    until={10000 * 10}
                    digitStyle={{}}
                    digitTxtStyle={{ color: 'white', bottom: "60%", fontWeight: "200" }}
                    timeLabelStyle={{ color: 'white', fontWeight: 'bold', bottom: "60%", fontWeight: "400" }}
                    separatorStyle={{ color: 'white', bottom: "60%", fontWeight: "400" }}
                    timeToShow={['D', 'H', 'M', 'S']}
                    timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
                    showSeparator
                  />
                  <View style={styles.iconContainer}>
                    <Icon
                      name="share"
                      color="#fff"
                      size={20}
                    />
                    <Icon name="heart" color="red" size={20} />
                  </View>
                </View>
              ))}
            </Swiper>
            <View style={styles.circluarProgressContainer}>
              <View style={styles.circularProgress}>
                <CircularProgress
                  radius={30}
                  value={29}
                  textColor='#222'
                  fontSize={20}
                  valueSuffix={'%'}
                  inActiveStrokeColor={'#2ecc71'}
                  inActiveStrokeOpacity={0.4}
                  inActiveStrokeWidth={6}
                  duration={4000}
                  onAnimationComplete={() => setValue(50)}
                />
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>£5,000,000 GBD</Text>
              </View>
              <View style={styles.sothebysContainer}>
                <Text style={styles.sothebysText}>Sotheby's</Text>
                <View style={styles.sothebysSubtitleContainer}>
                  <Text style={styles.interText}>
                    International Reality
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.locationCon}>
              <Text style={styles.location}>SHELTON STREET</Text>
              <Text style={styles.location}>COVENT GARDEN</Text>
              <Text style={styles.location}>LONDON</Text>
              <Text style={styles.location}>WC2H</Text>
              <Text style={styles.location}>UNITED KINGDOM</Text>
            </View>

          </View>
          <TouchableOpacity >
            <View style={styles.bottomCon}>
              <Text style={styles.euroButton}>£25.00 GBD</Text>
              <View>
                <Text style={styles.buyButton}>BUY ENTRY NOW</Text>
                <View style={styles.codeButton}>
                  <Text style={styles.codeButtonT}>#ZM7861234567</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardstyle: {
    alignItems: 'center',
    margin: 10,
    height: '45%',
  },
  slide: {
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  iconContainer: {
    position: 'absolute',
    right: '10%',
    top: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '20%',
  },
  circluarProgressContainer: {
    bottom: '10%',
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  circularProgress: {
    right: '40%',
  },
  progressLabel: {
    color: '#fff',
    fontSize: 9,
  },
  amountContainer: {
    left: '40%',
  },
  amount: {
    color: '#fff',
    fontSize: 13,
  },
  sothebysContainer: {
    left: '40%',
    alignItems: "flex-end",
  },
  sothebysText: {
    marginTop: "12%",
    fontSize: 18,
    color: '#fff',
  },
  interText: {

    color: '#fff',
    fontSize: 9,
  },
  locationCon: {
    bottom: '2%',
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  location: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  bottomCon: {
    backgroundColor: '#000',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    padding: 10,
    top: '1%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  euroButton: {
    fontSize: 13,
    color: '#fff',
  },
  buyButton: {
    fontSize: 13,
    color: '#fff',
    top: 5,
  },
  codeButton: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginTop: 2,
    marginRight: 1,
  },
  codeButtonT: {
    fontSize: 6,
    color: '#fff',
  },
});
export default App;

