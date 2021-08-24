import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, mainColors} from '../../../utils';
import {TabItem} from '../../atoms';

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <>
      <View style={styles.shadowContainer}>
        <View style={styles.shadow} />
      </View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={index}
              title={label}
              active={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 27,
    paddingVertical: 27,
    backgroundColor: colors.white,
    shadowColor: mainColors.green,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  shadowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    height: 110,
    position: 'absolute',
    // backgroundColor: 'yellow',
  },
  shadow: {
    backgroundColor: 'transparent',
    width: '95%',
    height: 110,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 22,
    transform: [{rotateX: '90deg'}],
  },
});
