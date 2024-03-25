import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Rive, {Alignment, Fit, RiveRef} from 'rive-react-native';
import {colorWithOpacity} from '../utils/color';
import {horizontal, vertical, width} from '../shared/theme/responsive';
import {LinearGradient} from 'react-native-linear-gradient';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Onboarding from '../screens/Onboarding';

const TabItem = ({data}) => {
  const ref = useRef<RiveRef>(null);
  const [active, setActive] = React.useState(false);

  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        console.log('press');
        setActive(!active);
        ref.current?.setInputState(data.stateMachineName, 'active', !active);
      }}>
      <View pointerEvents="none">
        <Rive
          resourceName="icons"
          stateMachineName={data.stateMachineName}
          artboardName={data.artboardName}
          style={styles.tabItem}
          // fit={Fit.Contain}
          // alignment={Alignment.Center}
          onStateChanged={state => {
            console.log('state', state);
          }}
          ref={ref}
        />
      </View>
    </TouchableOpacity>
  );
};

const TabItemList = [
  {
    stateMachineName: 'HOME_Interactivity',
    artboardName: 'HOME',
  },
  {
    stateMachineName: 'CHAT_Interactivity',
    artboardName: 'CHAT',
  },
  {
    stateMachineName: 'SEARCH_Interactivity',
    artboardName: 'SEARCH',
  },
  {
    stateMachineName: 'USER_Interactivity',
    artboardName: 'USER',
  },
  {
    stateMachineName: 'SETTINGS_Interactivity',
    artboardName: 'SETTINGS',
  },
];

const Tab = createBottomTabNavigator();

const Tabbar = () => {
  return (
    // <LinearGradient
    //   start={{x: 0.0, y: 1.5}}
    //   end={{x: 0, y: 2}}
    //   // locations={[0, 0.6]}
    //   colors={['#494C93', '#737989']}
    //   style={styles.container}>
    //   {TabItemList.map(item => (
    //     <TabItem data={item} />
    //   ))}
    //   {/* <Rive
    //     resourceName="icons"
    //     stateMachineName={'HOME_Interactivity'}
    //     artboardName={'HOME'}
    //   />
    //   <Rive
    //     resourceName="icons"
    //     stateMachineName={'CHAT_Interactivity'}
    //     artboardName={'CHAT'}
    //   />
    //   <Rive
    //     resourceName="icons"
    //     stateMachineName={'SEARCH_Interactivity'}
    //     artboardName={'SEARCH'}
    //   /> */}
    // </LinearGradient>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.container,
      }}>
      {TabItemList.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.artboardName}
          component={Onboarding}
          options={{
            tabBarIcon: ({focused}) => <TabItem data={item} />,
          }}
        />
      ))}
      {/* <Tab.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          tabBarIcon: ({focused}) => <TabItem data={TabItemList[0]} />,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: vertical(60),
    borderRadius: 22,
    backgroundColor: colorWithOpacity('#18223C', 1),
    position: 'absolute',
    bottom: 10,
    zIndex: 100,
    marginHorizontal: horizontal(16),
    alignSelf: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  tabItem: {
    height: vertical(30),
    width: horizontal(30),
  },
});
