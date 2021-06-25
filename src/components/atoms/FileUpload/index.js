import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconUpload } from '../../../assets'
import { colors, fonts, mainColors } from '../../../utils'

const FileUpload = ({onPress, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.upload}>
        <IconUpload />
        <Text style={styles.desc}>(Max 2 MB)</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FileUpload

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary1
  },
  upload: {
    backgroundColor: mainColors.smoke,
    borderWidth: 3,
    borderColor: mainColors.darkSmoke,
    borderRadius: 5,
    borderStyle: 'dashed',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: mainColors.darkSmoke,
    marginTop: 10
  }
})
