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
    description: `Hi! Is the item still available?`,
    image: require("../assets/jess.jpg"),
  },
  {
    id: 2,
    title: "Alan",
    description: `Hey, yes! But there is someone else bidding for it right now...`,
    image: require("../assets/alan.jpg"),
  },
  {
    id: 3,
    title: "Jessie",
    description: `Hmm, well maybe I can sweeten the deal c;`,
    image: require("../assets/jess.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing] = useState(false);

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
              title: "David",
              description: `We have a deal then? $50 and some meatballs.`,
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
