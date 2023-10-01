import React, { Component } from 'react';
import { FlatList} from 'react-native';
import NewsItem from './newsitem';
import Divider from './divider';
import styles from '../styles';

interface NewsBuilderState {
    news: any[]; // replace any with the actual type of your news items
}

class NewsBuilder extends Component<{}, NewsBuilderState> {
    constructor(props: {}) {
        super(props);
        this.state = { news: [] };
    }

    componentDidMount() {
        fetch('https://394xwy947e.execute-api.us-east-1.amazonaws.com/v1/feed')
            .then(response => response.json())
            .then(data => this.setState({ news: data }));
    }

    render() {
        return (
            <FlatList style={styles.listview}
                data={this.state.news}
                renderItem={({item}) => <NewsItem item={item}/>}
                keyExtractor={(item) => item.url_hash}
                ItemSeparatorComponent={()=>
                    <Divider/>
                }
            />
        );
    }
}

export default NewsBuilder;