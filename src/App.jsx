import React from "react";
import { SafeAreaView,View,Text,FlatList, StyleSheet,ScrollView, Image, Dimensions } from "react-native";
import news_data from './news_data.json';
import NewsCard from "./components/NewsCard";
import news_banner_data from './news_banner_data.json'

function App(){

  const renderNews = ({item}) => <NewsCard news={item} />

  return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>News</Text>
        <FlatList 
          ListHeaderComponent={()=>(
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerContainer}>
                  {
                    news_banner_data.map(banner=>(
                      <Image source={{uri:banner.imageUrl}} style={styles.bannerImage}/>
                    ))
                  }
           </ScrollView>

          )}
          keyExtractor={(item,index) => item.u_id.toString()}
          data={news_data} 
          renderItem={renderNews}
        />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1"
  },
  bannerImage:{
    height:Dimensions.get("window").height/4.7,
    width:Dimensions.get("window").width/1.2,
    

  },
  headerText:{
    fontWeight:"bold",
    fontSize:50,
    color:"black"
  }

})

export default App;
