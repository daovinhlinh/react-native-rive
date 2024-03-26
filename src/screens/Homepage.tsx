import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Rive, {Alignment, Fit, RiveRef} from 'rive-react-native';
import {code_course, ios_course} from '../../assets/Logos/images';
import SideMenu from '../components/SideMenu';
import {getFont, TextStyle} from '../shared/theme/font';
import {height, horizontal, vertical} from '../shared/theme/responsive';
import {colorWithOpacity} from '../utils/color';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  color: string;
  image: ImageSourcePropType;
}

interface CourseSection {
  id: string;
  title: string;
  caption: string;
  color: string;
  image: ImageSourcePropType;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'Animations in SwiftUI',
    subtitle: 'Build and animate an iOS app from scratch',
    caption: '20 sections - 3 hours',
    color: '#7850F0',
    image: ios_course,
  },
  {
    id: '2',
    title: 'Build Quick Apps with SwiftUI',
    subtitle:
      'Apply your Swift and SwiftUI knowledge by building real, quick and various applications from scratch',
    caption: '47 sections - 11 hours',
    color: '#6792FF',
    image: code_course,
  },
  {
    id: '3',
    title: 'Build a SwiftUI app for iOS 15',
    subtitle:
      'Design and code a SwiftUI 3 app with custom layouts, animations and gestures using Xcode 13, SF Symbols 3, Canvas, Concurrency, Searchable and a whole lot more',
    caption: '21 sections - 4 hours',
    color: '#005FE7',
    image: ios_course,
  },
];

const courseSections: CourseSection[] = [
  {
    id: '1',
    title: 'State Machine',
    caption: 'Watch video - 15 mins',
    color: '#9CC5FF',
    image: ios_course,
  },
  {
    id: '2',
    title: 'Animated Menu',
    caption: 'Watch video - 10 mins',
    color: '#6E6AE8',
    image: code_course,
  },
  {
    id: '3',
    title: 'Tab Bar',
    caption: 'Watch video - 8 mins',
    color: '#005FE7',
    image: ios_course,
  },
  {
    id: '4',
    title: 'Button',
    caption: 'Watch video - 9 mins',
    color: '#BBA6FF',
    image: code_course,
  },
];

const Homepage = () => {
  const buttonRef = useRef<RiveRef>(null);
  const [open, setOpen] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(0)).current;
  const translateValue = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const floatButtonValue = useRef(new Animated.Value(0)).current;
  const sideMenuValue = useRef(new Animated.Value(-288)).current;

  const rotateY = useRef(
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-45deg'],
    }),
  ).current;

  const scale = useRef(
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    }),
  ).current;

  const translateX = useRef(
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, horizontal(230)],
    }),
  ).current;

  const translateY = useRef(
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, vertical(-110)],
    }),
  ).current;

  const floatButtonTranslateX = useRef(
    floatButtonValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, horizontal(200)],
    }),
  ).current;

  const sideMenuTranslateX = useRef(
    sideMenuValue.interpolate({
      inputRange: [0, 1],
      outputRange: [horizontal(-288), 0],
    }),
  ).current;

  const flip = () => {
    // animation.(open ? 0 : 1);

    Animated.parallel([
      Animated.timing(animation, {
        toValue: open ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: open ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateValue.x, {
        toValue: open ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateValue.y, {
        toValue: open ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(floatButtonValue, {
        toValue: open ? 1 : 0,
        duration: 520,
        useNativeDriver: true,
      }),
      Animated.timing(sideMenuValue, {
        toValue: open ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onPressButton = () => {
    console.log('press');
    setOpen(!open);
    buttonRef.current?.setInputState('State Machine', 'isOpen', !open);
    flip();
  };

  const renderCourse = ({item}: {item: Course}) => (
    <LinearGradient
      style={[styles.courseContainer]}
      useAngle={true}
      angle={135}
      colors={[item.color, colorWithOpacity(item.color, 0.55)]}>
      <View style={styles.courseContent}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text
          style={styles.courseSubtitle}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {item.subtitle}
        </Text>
        <Text style={styles.courseCaption}>{item.caption.toUpperCase()}</Text>
      </View>
      <Image
        source={item.image}
        style={styles.courseLogo}
        resizeMode="contain"
      />
    </LinearGradient>
  );

  const renderCourseSection = ({item}: {item: CourseSection}) => (
    <View
      style={[styles.courseSectionContainer, {backgroundColor: item.color}]}>
      <View style={styles.courseSectionContent}>
        <Text style={styles.courseSectionTitle}>{item.title}</Text>
        <Text style={styles.courseSectionSubtitle}>{item.caption}</Text>
      </View>
      <Image
        source={item.image}
        style={styles.courseLogo}
        resizeMode="contain"
      />
    </View>
  );

  const renderSeparator = () => <View style={styles.courseSectionSeparator} />;

  const getItemLayout = (_: any, index: number) => ({
    length: horizontal(260),
    offset: horizontal(260 + 24) * index,
    index,
  });

  return (
    <SafeAreaView>
      <LinearGradient colors={['#17203A', colorWithOpacity('#17203A', 0.8)]}>
        <ScrollView nestedScrollEnabled style={styles.scrollView}>
          <TouchableOpacity
            onPress={onPressButton}
            style={[
              styles.floatButton,
              {
                transform: [{translateX: floatButtonTranslateX}],
              },
            ]}>
            <View pointerEvents="none">
              <Rive
                artboardName="menu"
                resourceName="menu_button"
                stateMachineName="State Machine"
                animationName="close"
                ref={buttonRef}
                fit={Fit.Cover}
                alignment={Alignment.Center}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <Animated.View
            style={[
              styles.sideMenu,
              {
                transform: [{translateX: sideMenuTranslateX}],
              },
            ]}>
            <SideMenu />
          </Animated.View>
          <View
            style={{
              ...(!open && {maxHeight: height * 0.9}),
              borderTopLeftRadius: open ? 0 : 30,
              borderBottomLeftRadius: open ? 0 : 30,
              overflow: 'hidden',
            }}>
            <Animated.View
              style={[
                styles.content,
                {
                  transform: [
                    {
                      translateX,
                    },
                    {
                      translateY,
                    },
                    {
                      rotateY,
                    },
                    {
                      scale,
                    },
                  ],
                },
              ]}>
              <Text style={styles.courseListHeader}>Courses</Text>
              <FlatList
                data={courses}
                renderItem={renderCourse}
                horizontal
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
              />
              <Text style={styles.recentListHeader}>Recents</Text>
              <FlatList
                data={courseSections}
                renderItem={renderCourseSection}
                showsVerticalScrollIndicator={false}
                style={styles.courseSectionList}
                scrollEnabled={false}
                ItemSeparatorComponent={renderSeparator}
              />
            </Animated.View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: 'red',
    width: '100%',
  },
  content: {
    backgroundColor: '#EEF1F8',
    // flex: 1,
    paddingBottom: vertical(70),
    paddingTop: vertical(60),
    transformOrigin: ['30%', '10%', 20],
    overflow: 'hidden',
    width: '100%',
  },
  floatButton: {
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 3,
  },
  sideMenu: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
    height: '100%',
  },
  icon: {
    width: vertical(54),
    height: vertical(54),
  },
  courseContainer: {
    paddingHorizontal: horizontal(30),
    paddingVertical: vertical(30),
    borderRadius: 30,
    width: horizontal(260),
    height: vertical(310),
    flexDirection: 'row',
    marginLeft: horizontal(24),
  },
  courseContent: {
    flex: 1,
    marginRight: horizontal(4),
    rowGap: vertical(8),
  },
  courseTitle: {
    ...getFont(TextStyle.title2),
    color: '#fff',
  },
  courseSubtitle: {
    ...getFont(TextStyle.subheadline),
    color: colorWithOpacity('#ffffff', 0.5),
  },
  courseCaption: {
    ...getFont(TextStyle.footnote2),
    color: colorWithOpacity('#ffffff', 0.5),
  },
  courseListHeader: {
    ...getFont(TextStyle.largeTitle),
    marginLeft: horizontal(24),
    marginVertical: vertical(18),
  },
  recentListHeader: {
    ...getFont(TextStyle.title6),
    marginLeft: horizontal(24),
    marginBottom: vertical(10),
    marginTop: vertical(31),
  },
  courseSectionContainer: {
    paddingHorizontal: horizontal(30),
    paddingVertical: vertical(30),
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseSectionList: {
    paddingHorizontal: horizontal(24),
  },
  courseSectionTitle: {
    ...getFont(TextStyle.title2),
    color: '#fff',
  },
  courseSectionSubtitle: {
    ...getFont(TextStyle.subheadline),
    color: colorWithOpacity('#ffffff', 0.7),
  },
  courseSectionContent: {
    paddingRight: horizontal(16),
    rowGap: vertical(8),
    marginRight: horizontal(16),
    borderRightWidth: 1,
    borderRightColor: colorWithOpacity('#000000', 0.1),
    flex: 1,
  },
  courseSectionSeparator: {
    height: vertical(20),
  },
  courseLogo: {
    width: horizontal(46),
    height: vertical(46),
  },
});
