export interface Lesson {
  lessonId: string;
  title: string;
  sections: {
    sectionTitle?: string;
    textBlock?: string[];
    listBlock?: string[];
    tableData?: {
      caption?: string;
      headingRow: string[];
      rows: (string | number)[][];
    };
    image?: {
      url: string;
      altText: string;
      imageSubject: string;
      descText: string;
      width: number[];
      backgroundColor: string;
    };
    frameClause?: {
      frameTitle: string;
      paragraphs: string[];
      borderColor: string;
    };
    codeBox?: {
      lines: { element: string; spaces: number; color: string }[];
      outputCode?: { type: string; content: string; style: {} }[];
      codeLang: string;
    };
    imagesGallery?: { srcUrl: string; altText: string; descText: string }[];
    bigButton?: { urlLink: string; text: string };
    resources?: { title: string; url: string }[];
    testYourself?: {
      question: string;
      options: string[];
      correctAnswer: string;
      explainAnswer: string;
    }[];
    decorativeLine?: boolean;
  }[];
}
export interface CourseContent {
  module: string;
  title: string;
  lessons: Lesson[];
}
export interface ModuleCourse {
  courseId: string;
  courseName: string;
  courseDescription: string;
  coverImage: {
    path: string;
    alternateText: string;
  };
  courseContent?: CourseContent[];
  isActive?: boolean;
}
