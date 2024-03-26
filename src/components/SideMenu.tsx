import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {horizontal, vertical} from '../shared/theme/responsive';
import {getFont, TextStyle} from '../shared/theme/font';
import {colorWithOpacity} from '../utils/color';
import Rive from 'rive-react-native';

type SideMenuItemListType = {
  stateMachineName: string;
  artboardName: string;
  title: string;
};

const SideMenuItemList: SideMenuItemListType[] = [
  {
    stateMachineName: 'HOME_interactivity',
    artboardName: 'HOME',
    title: 'Home',
  },
  {
    stateMachineName: 'CHAT_Interactivity',
    artboardName: 'CHAT',
    title: 'Chat',
  },
  {
    stateMachineName: 'SEARCH_Interactivity',
    artboardName: 'SEARCH',
    title: 'Search',
  },
  {
    stateMachineName: 'USER_Interactivity',
    artboardName: 'USER',
    title: 'User',
  },
  {
    stateMachineName: 'SETTINGS_Interactivity',
    artboardName: 'SETTINGS',
    title: 'Settings',
  },
];

type SideMenuItemProps = {
  stateMachineName: string;
  artboardName: string;
  title: string;
  isActive: boolean;
  onChangeTab: (index: number) => void;
};

const SideMenuItem = ({
  stateMachineName,
  artboardName,
  title,
  isActive,
  onChangeTab,
}: SideMenuItemProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.sideMenuItem,
        isActive && {
          backgroundColor: '#fff',
        },
      ]}
      onPress={() => {
        onChangeTab();
        console.log(123);
      }}>
      <View pointerEvents="none">
        {/* <Rive
          artboardName={artboardName}
          stateMachineName={stateMachineName}
          resourceName="icons"
          style={styles.icon}
        /> */}
      </View>
      <Text style={[styles.title, isActive && {color: '#000'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const SideMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onChangeTab = (index: number) => {
    console.log(index);

    setActiveTab(index);
  };

  const renderItem = ({item, index}: {item: SideMenuItemListType}) => (
    <>
      <SideMenuItem
        stateMachineName={item.stateMachineName}
        artboardName={item.artboardName}
        title={item.title}
        isActive={activeTab === index}
        onChangeTab={() => onChangeTab(index)}
      />
      {activeTab !== index && index < SideMenuItemList.length - 1 && (
        <View style={styles.separator} />
      )}
    </>
  );

  // const renderSeparator = () => ;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.username}>Linh</Text>
          <Text style={styles.userRole}>Developer</Text>
        </View>
      </View>
      <FlatList
        data={SideMenuItemList}
        renderItem={renderItem}
        // ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    width: horizontal(288),
    flex: 1,
    backgroundColor: '#17203A',
    borderRadius: 30,
    paddingHorizontal: horizontal(8),
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontal(8),
    paddingHorizontal: horizontal(10),
    marginBottom: vertical(26),
    marginTop: vertical(16),
  },
  avatar: {
    height: vertical(36),
    width: vertical(36),
    borderRadius: 36,
    backgroundColor: '#fff',
  },
  username: {
    ...getFont(TextStyle.headline),
    color: '#fff',
  },
  userRole: {
    ...getFont(TextStyle.footnote2),
    color: colorWithOpacity('#ffffff', 0.5),
  },
  title: {
    ...getFont(TextStyle.headline),
    color: '#EDF0F7',
  },
  icon: {
    width: vertical(24),
    height: vertical(24),
  },
  sideMenuItem: {
    flexDirection: 'row',
    paddingHorizontal: horizontal(22),
    paddingVertical: vertical(14),
    columnGap: horizontal(8),
    alignItems: 'center',
    borderRadius: 12,
  },
  separator: {
    height: 1,
    backgroundColor: colorWithOpacity('#ffffff', 0.1),
    marginHorizontal: horizontal(22),
  },
});
