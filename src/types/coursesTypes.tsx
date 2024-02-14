export interface Lesson {
  lessonId: string;
  title: string;
  sections: {
    sectionTitle?: string;
    textBlock?: string[];
    image?: {
      url: string;
      altText: string;
      imageSubject: string;
      descText: string;
      width: number[];
    };
    frameClause?: { frameTitle: string; paragraphs: string[] };
    codeBox?: {
      lines: { element: string; spaces: number; color: string }[];
      outputCode?: { type: string; content: string; style: {} }[];
      codeLang: string;
    };
    listBlock?: string[];
    imagesGallery?: { srcUrl: string; altText: string; descText: string }[];
    BigButton?: { urlLink: string; text: string };
    decorativeLine: boolean;
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
  courseContent: CourseContent[];
}
