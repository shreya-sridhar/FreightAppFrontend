import React from "react";
import {Text, Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

export enum Cards {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
}

interface CardProps {
  type: Cards;
}

export default ({ type }: CardProps) => {
  <Text style={{fontSize:20}}>Choose Payment Mode</Text>
  let source: number;
  switch (type) {
    case Cards.Card1:
      source = require("C:/Users/shrey/FreightApp/assets/card1.png");
      break;
    case Cards.Card2:
      source = require("C:/Users/shrey/FreightApp/assets/card2.png");
      break;
    case Cards.Card3:
      source = require("C:/Users/shrey/FreightApp/assets/card3.png");
      break;
    case Cards.Card4:
      source = require("C:/Users/shrey/FreightApp/assets/card4.png");
      break;
    case Cards.Card5:
      source = require("C:/Users/shrey/FreightApp/assets/card5.png");
      break;
    case Cards.Card6:
      source = require("C:/Users/shrey/FreightApp/assets/card6.png");
      break;
    default:
      throw Error("Invalid card style");
  }
  {return (
    <>
  <Image style={styles.card} {...{ source }} />
  </>
  )};
};

