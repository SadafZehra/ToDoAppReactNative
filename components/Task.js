import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
const Task = (props)=> {
    return(
        <View style = {styles.items}>
            <View style = {styles.itemLeft}>
             <View style = {styles.square}>
            </View>
            <Text style = {styles.itemText}>
            {props.text}
            </Text>
            </View>
            <View style = {styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
items:{
backgroundColor: '#ffff',
padding: 15,
borderRadius:10,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginBottom:20,
},
itemLeft:{
flexDirection:'row',
alignItems:'center',
flexWrap:'wrap',
},
square:{
    width:24,
    height:24,
backgroundColor:'#558Cf6',
opacity:0.8,
borderRadius:5,
marginRight:15,

},
itemText:{
maxWidth: '80%',
},
circular:{
width:12,
height:12,
borderColor:'#558Cf6',
borderWidth:2,
borderRadius:5,
},
})
export default Task;