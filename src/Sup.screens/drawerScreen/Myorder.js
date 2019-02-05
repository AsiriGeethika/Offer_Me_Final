import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class SDrawerScreen4 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
        <View style={StyleSheet.container}>
        <CustomHeader/>
        <ScrollView>
            <ImageBackground source={require('./../../Images/Background.jpg')} style={{width:'100%', height:'100%'}}>
                <View style={styles.cont}>
                    <Text style= {styles.TextComponentStyle}>Categories</Text>
                    <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Cloth')}>
                        <Text  style= {styles.Textstyle}>Clothing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Food')}>
                        <Text  style= {styles.Textstyle}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Fin')}>
                        <Text  style= {styles.Textstyle}>Finance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Serv')}>
                        <Text  style= {styles.Textstyle}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Other')}>
                        <Text  style= {styles.Textstyle}>Other</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
        </View>
         )
     }
}
 
export default SDrawerScreen4;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*banner:{
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems:'stretch',
    },*/
    TextComponentStyle: {
        fontSize: 28,
        fontWeight: '800',
        color: "#fff",
        textAlign: 'center', 
        marginBottom: 5,
        padding : 10,
    },
    Textstyle: {
        fontSize: 20,
        alignItems: 'center',
        fontWeight: '600',
        color: "#fff",
        textAlign: 'center', 
        margin: 10,
        padding : 10,
    },
    cont:{
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#ffccbc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius:3,
        elevation:1,
        alignSelf:'center',
        padding: 5,
        width: '70%',
        backgroundColor: 'rgba(130, 138, 139,0.5)',
        marginBottom: 30,
        marginTop: 30,
    },
    btnn:{
        width: '70%',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 5,
    },

});