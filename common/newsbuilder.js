import React, { Component, useEffect, useState } from 'react';
import { FlatList} from 'react-native';
import NewsItem from './newsitem';
import Divider from './divider';
import styles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import addnews from '../redux/actions/actionpayload/addnewsaction';


const NewsBuilder = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://394xwy947e.execute-api.us-east-1.amazonaws.com/v1/feed')
            .then(response => response.json())
            .then((data)=>{
                // newsList = data;
                dispatch(addnews(data));
            });
        
    },[]);
    
    newsList = useSelector((state)=>state.newsreducer.news);
    return (
        <FlatList style={styles.listview}
            data={newsList}
            renderItem={({item}) => <NewsItem item={item}/>}
            // keyExtractor={(item)=>item}
            ItemSeparatorComponent={()=>
                <Divider/>
            }
        />
    );
}

export default NewsBuilder;