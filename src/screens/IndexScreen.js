import { View, Text, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext'
import { useContext } from 'react'


export default () => {

  const { data, addPost } = useContext(BlogContext)

  return (
    <View>
      <Text>Index</Text>
      <FlatList data={data} keyExtractor={post => post.title} renderItem={({ item: post }) => <Text>{post.title}</Text>} />
      <Button title="Add blog post" onPress={() => addPost({ title: '123' })} />
    </View>
  )
}
