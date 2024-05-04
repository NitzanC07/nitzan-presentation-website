"use client";
import { Box, Flex, Heading, Highlight, Image, Text } from "@chakra-ui/react";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import { useState } from "react";

function About() {
  const [showEducationParagraph, setShowEducationParagraph] = useState(false);
  const [showCoachParagraph, setShowCoachParagraph] = useState(false);
  const [showFullstackParagraph, setShowFullstackParagraph] = useState(false);

  return (
    <Flex
      w={"100%"}
      flexDirection={["column", "column", "row"]}
      justifyContent={["flex-start", "flex-start", "center"]}
      alignItems={["center", "center", "flex-start"]}
      m={0}
      mt="60px"
      p={5}
      bgColor='gray.200'
    >
      <Image
        src="/images/main-page/profile_picture.jpg"
        alt="Nitzan Cohen"
        borderRadius="full"
        borderWidth={2}
        borderColor={'black'}
        borderStyle={"solid"}
        boxSize={["3xs", "2xs", "xs"]}
        ml={[0, "50px"]}
        mb={["35px", 0]}
        shadow={"2px 2px 10px gray"}
      />
      <Box width={[280, 450, 600]} mt={[0, 0, "40px"]}>
        <Heading
          fontFamily="var(--font-varela_round)"
          color={"#815B5B"}
          fontSize={24}
          py={4}
          mx={[3, 3, 7, 0]}
          mt={5}
          mb={1}
          tabIndex={1}
        >
          מי אני?
        </Heading>
        <ParagraphBox
          textContent={[
            "נעים להכיר, אני ניצן כהן. הן בעולמי האישי והן בתחומים המקצועיים, הערכים שמובילים אותי תמיד הם נחישות ויוזמה. נחישות, משמעה בעיניי היא לעשות את הפעולות הדרושותולעבוד עם הפתרונות כדי להגיע לתוצאה הרצויה. יוזמה, לפי סולם הערכים שלי היא לבצע משימות מעבר להגדרת התפקיד הרשמית. ",
            "ערכים אלה באים לידי ביטוי למידה מתמדת ומעמיקה, עם יכולת גבוהה של למידה עצמית ומהירה. ביטוי נוסף לערכים אלה היא יצירתיות בגישה שלי לפתרון בעיות, התגברות על מכשולים וצליחת אתגרים. ואני לא שוכח אף לא לרגע לצעוד בדרכי עם שק מלא באהבה, הערכה והוקרה, הן לעצמי, ובמיוחד לאנשים שאני פוגש בדרכי.",
            "בין פעילויותיי השונות שאני עוסק בהן אפשר למצוא תחומי ידע שונים ומגוונים מעולמות תוכן נפרדים. אך כל אחד מהם מבטא מיומנות שונה,שהמשותף לכל היא האהבה לאנשים."
          ]}
        />
        <Heading
          onClick={() => setShowEducationParagraph(!showEducationParagraph)}
          cursor="pointer"
          fontFamily="var(--font-varela_round)"
          color={"#815B5B"}
          fontSize={24}
          py={4}
          mx={[3, 3, 7, 0]}
          mt={5}
          mb={1}
          tabIndex={1}
        >
          מורה לחינוך מיוחד
          <span style={{ color: "#815b5b88", fontSize: "16px" }}>
            {" "}
            {showEducationParagraph ? "(לחץ לצמצום)" : "(לחץ להרחבה)"}
          </span>
        </Heading>
        {showEducationParagraph && (
          <ParagraphBox
            textContent={[
              'בעל תואר ראשון בחינוך מיוחד ושילוב אומנויות ממכללת תל-חי, ומעל עשור עובד כמורה במסגרת תוכנית "שלבים" (שהופעלה בעבר ע"י קדימה מדע, והיום פועלת תחת משרד החינוך) בהוראה וליווי אישי לתלמידים שנאלצים להיעדר מבית הספר לתקופות ממושכות מסיבות רפואיות או רגשיות שונות.',
            ]}
          />
        )}
        <Heading
          onClick={() => setShowCoachParagraph(!showCoachParagraph)}
          cursor="pointer"
          fontFamily="var(--font-varela_round)"
          color={"#815B5B"}
          fontSize={24}
          py={4}
          mx={[3, 3, 7, 0]}
          mt={5}
          mb={1}
          tabIndex={1}
        >
          מאמן לריצות ארוכות
          <span style={{ color: "#815b5b88", fontSize: "16px" }}>
            {" "}
            {showCoachParagraph ? "(לחץ לצמצום)" : "(לחץ להרחבה)"}
          </span>
        </Heading>
        {showCoachParagraph && (
          <ParagraphBox
            textContent={[
              'מאמן לריצות ארוכות מוסמך מטעם בית הספר למקצועות הספורט בתל אביב, וגם רץ בעצמי ולהנאתי. אני נותן אימונים אישיים במסגרת "איתן - כל אחד יכול" מאז 2020 לאנשים על הרצף האוטיסטי במטרה לשפר כושרם הגופני ולהעצים אותם מבחינה אישית ורגשית.',
            ]}
          />
        )}
        <Heading
          onClick={() => setShowFullstackParagraph(!showFullstackParagraph)}
          cursor="pointer"
          fontFamily="var(--font-varela_round)"
          color={"#815B5B"}
          fontSize={24}
          py={4}
          mx={[3, 3, 7, 0]}
          mt={5}
          mb={1}
          tabIndex={1}
        >
          מפתח Web Development - Full Stack
          <span style={{ color: "#815b5b88", fontSize: "16px" }}>
            {" "}
            {showFullstackParagraph ? "(לחץ לצמצום)" : "(לחץ להרחבה)"}
          </span>
        </Heading>
        {showFullstackParagraph && (
          <ParagraphBox
            textContent={[
              "בוגר קורס של מכללת TripleTen ו-Masterschool. יש לי בקיאות בפיתוח צד לקוח וצד שרת של אתרי אינטרנט בשפות HTML, CSS ו-Java Script. מכיר יודע לעבוד עם TypeScript ועם סביבות העבודה React ו-Next.js. לטפל בכל הנוגע לצד השרת עם Node.js וכל מה שנוגע לזה כמו בקשות שרת REST API, עבודה עם בסיס נתונים מסוג NoSQL של MongoDB, וגם היכרות עם שיטת ה-Microservices.",
              "חלק מהתכנים למדתי במהלך הקורס, וחלק נוסף הרחבתי והעמקתי את הלמידה שלי באופן עצמאי באמצעות קורסים של אתר Udemy.",
            ]}
          />
        )}
      </Box>
    </Flex>
  );
}

export default About;
