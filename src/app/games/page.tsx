"use client";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import cards from "../../../data/memory-game.json";
import ImageCard from "@/components/Games/ImageCard";
import PopupMessage from "@/components/PopupMessage/PopupMessage";
import SubHeadingBox from "@/components/LearningManagementSystem/LessonContent/SubHeadingBox";
import TableData from "@/components/LearningManagementSystem/LessonContent/TableData";

function GamesPage() {
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [isShowCard, setIsShowCard] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );
  const [isVisible, setIsVisible] = useState(Array(cards.length).fill(false));
  const [firstCard, setFirstCard] = useState(-1);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    setShuffledCards(cards.sort(() => Math.random() - 0.5));
  }, []);

  const continuePlay = () => {
    setOpenPopup(false);
  };


  const showCard = (cardName: string, selectedCardId: number) => {
    if (
      firstCard === selectedCardId ||
      isShowCard.filter((item) => item).length > 1
    )
      return;
    setIsShowCard((prev: boolean[]) => {
      return prev.map((item, i) => {
        if (firstCard === -1) {
          // Selected the first card
          if (i === selectedCardId) {
            setFirstCard(i);
            return !item;
          } else {
            return item;
          }
        } else {
          // Selected the second card.
          if (i === selectedCardId) {
            setTimeout(() => {
              checkIsMatch(i);
              setTries(tries + 1);
              setFirstCard(-1);
              setIsShowCard(Array(cards.length).fill(false));
            }, 2000);
            return !item;
          } else {
            return item;
          }
        }
      });
    });
  };

  const checkIsMatch = (secondCard: number) => {
    if (
      shuffledCards[firstCard].cardName === shuffledCards[secondCard].cardName
    ) {
      setScore(score + 1);
      setIsVisible([
        ...isVisible,
        (isVisible[firstCard] = true),
        (isVisible[secondCard] = true),
      ]);
      // setOpenPopup(true);
    }
  };

  return (
    <Flex
      height={"100vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {openPopup && (
        <PopupMessage
          continuePlay={continuePlay}
          content="כל הכבוד!"
          buttonText="המשך לשחק"
        />
      )}
      <SubHeadingBox textHeading="משחק זיכרון" />
      <TableData
        headingRow={["ניסיונות", "פספוסים", "התאמות", "ניקוד"]}
        rows={[
          [
            tries,
            tries - score,
            score,
            tries > 0 ? Math.floor((score / tries) * 100) : 0,
          ],
        ]}
      />

      <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
        {shuffledCards.map((item, index) => (
          <ImageCard
            key={index}
            selectedCardId={index}
            item={item}
            isVisible={isVisible}
            isShowCard={isShowCard}
            showCard={() => showCard(item.cardName, index)}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default GamesPage;
