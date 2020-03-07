/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import Metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  cardHaji: {
    marginTop: scale(30),
    backgroundColor: '#FF6060',
    height: scale(100),
    width: scale(156),
    borderRadius: 10
  },
  cardUmroh: {
    marginLeft: scale(15),
    borderRadius: 10,
    marginRight: scale(15),
    marginTop: scale(30),
    backgroundColor: '#FFC275',
    height: scale(100),
    width: scale(156)
  },
  cardQuiz: {
    borderRadius: 10,
    marginTop: scale(40),
    backgroundColor: '#A292FF',
    height: scale(100),
    width: scale(156)
  },
  cardPengaturan: {
    borderRadius: 10,
    marginLeft: scale(15),
    marginTop: scale(40),
    backgroundColor: '#5D7DFF',
    height: scale(100),
    width: scale(156)
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  containerFix: {
    paddingHorizontal: scale(15)
  },
  containerDiscover: {
    borderRadius: 4,
    alignItems: 'center',
    marginTop: scale(16)
  },
  imageBackground: {
    width: Metrics.screenWidth,
    height: scale(215)
  },
  titleCard: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold'
  },
  contentCard: {
    color: '#FFF',
    fontSize: 12,
    marginTop: scale(5),
    fontFamily: 'Montserrat-Regular'
  },
  discover: {
    color: '#29291E',
    marginTop: scale(32),
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: scale(16),
    fontSize: 20,
    fontFamily: 'Montserrat-Bold'
  },
  imageDiscover: {
    overflow: 'hidden',
    borderRadius: 4,
    width: scale(328),
    height: scale(120)
  },
  textCard: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#FFF'
  },
  textContainer: {
    marginLeft: scale(15),
    marginTop: scale(32)
  },
  textHello: {
    color: '#FFF',
    fontSize: 32,
    fontFamily: 'Montserrat-Medium'
  },
  textName: {
    color: '#FFF',
    fontSize: 32,
    fontFamily: 'Montserrat-Bold'
  }
});

export default styles;
