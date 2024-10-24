import { Text, View,StatusBar, TouchableOpacity, Image, Linking } from "react-native";
import styles from '../../styles/contact/contact-styles'
export default function ContactInformation(){
    const statusBarHeight = StatusBar.currentHeight;
    const openWspNumber=(urlMedia:string)=>{
        Linking.openURL(urlMedia)
    }
    return(
        <View  style={{height:'100%',paddingTop:statusBarHeight}}>
            <View style={styles.container}>
                <View style={styles.titleContact}>
                    <Text style={styles.textTitle}>
                        Medios de contacto
                    </Text>
                </View>
                <View style={styles.mediasContactContainer}>
                    <Text style={{fontSize:20,fontWeight:500}}>
                       Numeros de WhatsApp
                    </Text>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834051983')}
                    >
                        <Text style={{fontSize:18}}>Asesoramiento General</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834397239')}
                    >
                        <Text style={{fontSize:18}}>Departamento Juridico</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834230813')}
                    >
                        <Text style={{fontSize:18}}>SiDCa Gestion Expediente</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834283151')}
                    >
                        <Text style={{fontSize:18}}>SiDCa Turismo</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834250139')}                    
                    >
                        <Text style={{fontSize:18}}>Casa del Docente</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834220295')}                    
                    >
                        <Text style={{fontSize:18}}>SiDCA Radio</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493835406450')}                    
                    >
                        <Text style={{fontSize:18}}>Convenio con Hoteles</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834012228')}                    
                    >
                        <Text style={{fontSize:18}}>Capacitaciones</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493832437803')}                    
                    >
                        <Text style={{fontSize:18}}>Soporte Tecnico</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhatsApp} activeOpacity={1}
                        onPress={()=>openWspNumber('https://wa.me/5493834539754')}                    
                    >
                        <Text style={{fontSize:18}}>Afiliado  Adherente</Text>
                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/logos/whatsapp.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={{width:'90%'}}>
                        Sede central Ayacucho 2271 1° Piso, San Fernando del Valle de Catamarca, Catamarca CP 4700
                    </Text>
                </View>
            </View>
        </View>
    )
}