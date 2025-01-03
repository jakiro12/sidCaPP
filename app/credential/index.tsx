import { ImageBackground, StatusBar, Text, View, Dimensions } from "react-native";
import styles from '../../styles/cedential/credential-styles'
import { SidcaContext } from "../_layout";
import { useContext } from "react";
export default function GetCredentialCard(){
    const{userData}=useContext(SidcaContext)
    const statusBarHeight:number | undefined  = StatusBar.currentHeight;   
const windowHeight = Dimensions.get('window').height;
    return(
        <View  style={{height:'100%',paddingTop:statusBarHeight}}>
            <ImageBackground style={styles.container} source={require('../../assets/home/credential.jpeg')} resizeMode="cover">
            <View style={styles.viewInfoContainer}>
                <View style={[{width:windowHeight - 20},styles.mainInformationContainer]}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{userData?.apellido !== undefined ? `${userData.apellido},` : null} {userData?.nombre}</Text>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>DNI: {userData?.dni}</Text>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Departamento: {userData?.departamento === undefined ? 'Sin asignar' :userData?.departamento }</Text>
                </View>            
            </View>            
            <View style={styles.cardNameContainer}>
                <Text style={{fontSize:25,fontWeight:500,transform:'rotateZ(90deg)',width:300,marginTop:180,color:'#ffffff'}}>Credencial de Afiliado</Text>
            </View>                                          
            <View style={styles.logosHeaderContainer}>               
            </View>      
            </ImageBackground>
        </View>
    )
}