import Reactron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactron.configure({ host: '192.168.0.145' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
