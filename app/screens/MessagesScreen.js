import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Jessie",
    description: `Aenean non rutrum orci. Maecenas non pharetra diam. Suspendisse tempus mi ante, vel dictum nulla lobortis a. In fermentum, dui sit amet interdum pharetra, massa dui blandit diam, sed varius nisl tellus eu tellus. Sed sed turpis ultrices felis imperdiet vulputate ut id nisl. Donec nec dictum quam. Morbi in dui libero. Integer sagittis lacinia facilisis. Fusce feugiat lectus quam. Aliquam viverra, elit id vulputate pellentesque, ipsum nibh gravida metus, nec cursus felis turpis eleifend felis. Vivamus ac tristique ligula, vel pretium nibh. Duis et sapien magna. Pellentesque vitae nunc dolor.`,
    image: require("../assets/jess.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/alan.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/jess.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // const filteredMessages = messages.filter(m => m.id !== message.id);
    // setMessages(filteredMessages);
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            handlePressOut={() => console.log("Message Sent: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                handleOnPressOut={() => handleDelete(item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});
