import {Text, View, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const BookCard=({title,author,price,discount,isAvailable})=>{
  const newPrice= price-(price*discount /100);
  return(
    <View style={styles.card}>
      <Text style={styles.bookTitle}>{title}</Text>
      <Text style={styles.author}>by {author}</Text>
      <Text style={styles.price}>Price: {price}$</Text>
      <Text style={styles.price}>After discount: {newPrice}$</Text>
      <Text style={styles.status}>
        {isAvailable?'Available':'Not available'}
      </Text>
    </View>
  );
};
export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.heading}>My Library</Text>
      <Text style={styles.subtitle}>First React APP</Text>
      <BookCard
        title="Clean Code"
        author="Robert Martin"
        price={40}
        discount={10}
        isAvailable={true }
      />
      <BookCard
        title="JavaScript Basics"
        author="Sara Ali"
        price={25}
        discount={20}
        isAvailable= {false}
      />
      <BookCard
        title="Learning React Native"
        author="Ahmad Saeed"
        price={30}
        discount={0}
        isAvailable={true}
      />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    padding:23,
    paddingTop:55,
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    color:'#162343',
  },
  subtitle:{
    fontSize:14,
    textAlign:'center',
    color:'#202e42',
    marginTop:5,
    marginBottom:25,
  },
  card:{
    backgroundColor:'#dfe1e5',
    borderWidth:2.5,
    borderColor:'#263f98',
    borderRadius:13,
    padding:13,
    marginBottom:18,
  },
  bookTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#131822',
    marginBottom:5,
  },
  author: {
    fontSize:14,
    color:'#104390',
    marginBottom:12,
  },
  price:{
    fontSize: 15,
    color:'#rgb(24, 36, 63)',
    marginBottom:5,
  },
  status:{
    fontSize:15,
    fontWeight:'bold',
    color:'#1e3260',
    marginTop:2,
  },
});