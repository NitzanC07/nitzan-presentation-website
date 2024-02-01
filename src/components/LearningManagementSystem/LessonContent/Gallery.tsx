'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ImageContainer from './ImageContainer'

interface images {
        srcUrl: string;
        altText: string;
        descText: string;
}
interface GalleryProps {
    images: images[]
}

function Gallery({images}: GalleryProps) {
    const [visibleArticle, setVisibleArticle] = useState(0);

  const nextPracticeArticleHandler = () => {
    setVisibleArticle((visibleArticle + 1) % images.length);
  };
  const prevPracticeArticleHandler = () => {
    setVisibleArticle(
      visibleArticle === 0
        ? images.length - 1
        : (visibleArticle - 1) % images.length
    );
  };
  return (
    <Flex flexDir="column">
          <Flex justifyContent="space-evenly" alignItems='center'>
            <Button onClick={prevPracticeArticleHandler} colorScheme='yellow' tabIndex={1}>
              <ArrowRightIcon />
            </Button>
            <Text
              as="p"
              style={{ fontFamily: "Varela Round, sans-serif" }}
              fontSize={18}
              m={0}
              p={0}
              tabIndex={4}
            >{`${visibleArticle + 1}/${images.length}`}</Text>
            <Button onClick={nextPracticeArticleHandler} colorScheme='yellow' tabIndex={1}>
              <ArrowLeftIcon />
            </Button>
          </Flex>
          <ImageContainer
            srcUrl={images[visibleArticle].srcUrl}
            altText={images[visibleArticle].altText}
            descText={images[visibleArticle].descText}
            width={[300, 400, 600, 700]}
          />
        </Flex>
  )
}

export default Gallery