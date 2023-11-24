import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, ScrollView, Image, View } from 'react-native';

export default function App() {

    const [data, setData] = useState()

    const getData = async () => {
        try {
            const res = await axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: 'US',
                    category: 'business',
                    apiKey: '80ef778e508744ef8c442e2e406d18a8',
                },
            });
            setData(res.data.articles)

        } catch (error) {
            alert(error.massage);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {/console.log(data)/}
            <SafeAreaView>
                <ScrollView>
                    {data && data.map((item, i) => {
                        return <>
                            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 5 }}>
                                <image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
                                <View style={{ justifyContent: 'space-between' }}>
                                    <text style={{ fontWeight: 'bold' }}>{item.title}</text>
                                    <text>{item.author}</text>
                                </View>
                            </View>
                        </>;
                    })}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}