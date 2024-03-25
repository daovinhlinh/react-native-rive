import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontSize, horizontal, vertical } from '../shared/theme/responsive'
import { getFont, TextStyle } from '../shared/theme/font'

const SignInModal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subhead2}>Access to 240+ hours of content.{'\n'}Learn design and code, by building real apps with React and Swift.</Text>
      <View>
        <Text style={styles.subhead}>Email</Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View>
        <View style={styles.sbRow}>
          <Text style={styles.subhead}>Password</Text>
          <Text style={styles.subhead_forgot}>Forgot password</Text>
        </View>
        <TextInput
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.headline}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.separateText}>
        <View style={styles.line} />
        <Text style={styles.footnote2}>OR</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.footnote}>Sign up with Email, Apple or Google</Text>
    </View>
  )
}

export default SignInModal

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: horizontal(30),
    paddingTop: vertical(48),
    paddingBottom: vertical(40),
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      height: vertical(30),
      width: 0,
    },
    rowGap: vertical(24)
  },
  title: StyleSheet.flatten([getFont(TextStyle.title), {
    fontSize: fontSize(34),
    lineHeight: vertical(41),
    textAlign: 'center',
  }]),
  subhead2: {
    ...getFont(TextStyle.subheadline2),
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  subhead_forgot: {
    ...getFont(TextStyle.subheadline2),
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.3)',
  },
  subhead: {
    ...getFont(TextStyle.subheadline),
    color: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    height: vertical(50),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(194, 207, 240, 0.55)',
    marginTop: vertical(8),
    paddingHorizontal: vertical(8),
    paddingVertical: vertical(8),
    ...getFont(TextStyle.body),
  },
  sbRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headline: {
    ...getFont(TextStyle.headline),
    color: 'white',
    textAlign: 'center',
    lineHeight: vertical(50),
  },
  submitButton: {
    height: vertical(56),
    backgroundColor: '#F77D8E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'rgba(247, 125, 142, 0.3)',
    shadowOffset: {
      height: vertical(10),
      width: 0,
    },
    alignItems: 'center',
    justifyContent: 'center'
  },
  footnote2: {
    ...getFont(TextStyle.footnote2),
    color: 'rgba(0, 0, 0, 0.3)',
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
  },
  separateText: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: horizontal(8),
  },
  footnote: {
    ...getFont(TextStyle.footnote),
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  }
})