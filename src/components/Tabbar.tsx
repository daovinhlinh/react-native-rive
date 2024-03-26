/* eslint-disable react-hooks/exhaustive-deps */
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {FC, useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Rive, {RiveRef} from 'rive-react-native';
import Homepage from '../screens/Homepage';
import {horizontal, vertical, width} from '../shared/theme/responsive';
import {colorWithOpacity} from '../utils/color';

type TabItemProps = {
  data: TabItemListType;
  activeTab: boolean;
  onChangeTab: () => void;
};

type TabItemListType = {
  stateMachineName: string;
  artboardName: string;
};

const TabItemList: TabItemListType[] = [
  {
    stateMachineName: 'HOME_interactivity',
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

const TabItem = ({data, activeTab, onChangeTab}: TabItemProps) => {
  const ref = useRef<RiveRef>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        ref.current?.setInputState(data.stateMachineName, 'active', false);
      }, 1500);
    }
  }, [active]);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const onPressTab = () => {
    setActive(!active);
    ref.current?.setInputState(data.stateMachineName, 'active', true);
    onChangeTab();
  };

  return (
    <TouchableOpacity onPress={onPressTab}>
      {activeTab && <View style={styles.activeTabItem} />}
      <View pointerEvents="none">
        <Rive
          resourceName="icons"
          stateMachineName={data.stateMachineName}
          artboardName={data.artboardName}
          style={styles.tabItem}
          ref={ref}
        />
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

const Tabbar = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        {/* {TabItemList.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.artboardName}
            component={item.component}
            initialParams={item}
            // options={{
            //   tabBarIcon: ({focused}) => <TabItem data={item} />,
            // }}
          />
        ))} */}
        <Tab.Screen
          name={TabItemList[0].artboardName}
          component={Homepage}
          initialParams={TabItemList[0]}
        />
        <Tab.Screen
          name={TabItemList[1].artboardName}
          component={Homepage}
          initialParams={TabItemList[1]}
        />
        <Tab.Screen
          name={TabItemList[2].artboardName}
          component={Homepage}
          initialParams={TabItemList[2]}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default Tabbar;

const CustomBottomTab: FC<BottomTabBarProps> = ({state}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.customTabContainer}>
      {state.routes.map((route, index) => {
        return (
          <TabItem
            data={route.params as TabItemListType}
            key={route.key}
            activeTab={activeTab === index}
            onChangeTab={() => setActiveTab(index)}
          />
        );
      })}
    </View>
  );
};

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
    height: vertical(26),
    width: vertical(26),
    // marginTop: vertical(4),
  },
  activeTabItem: {
    height: vertical(4),
    width: horizontal(20),
    borderRadius: 3,
    position: 'absolute',
    top: vertical(-7),
    backgroundColor: '#81B4FF',
    alignSelf: 'center',
  },
  customTabContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: vertical(20),
    width: horizontal(width - 32),
    height: vertical(60),
    backgroundColor: '#18223C',
    alignSelf: 'center',
    borderRadius: 22,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontal(20),
  },
});
