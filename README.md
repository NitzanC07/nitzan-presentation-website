# My Presntation Website

Author: Nitzan Cohen

## What includes in this site?

- About me and my experience.
- My variety activities
  - Web Developer
  - Courses in Web development field.
  - Special education teacher
  - Running coach

## Courses structure

### Lesson structure

Every lesson contains three properties: lessonId, title and sections.

```typescript
{
  lessonId: string;
  title: string;
  sections: {}[];
}
```

Every section contains these properties:

```typescript
sections: {
  sectionTitle?: string;
  textBlock?: string[];
  image?: { url: string; altText: string; descText: string; width: number[] };
  frameClause?: { frameTitle: string; paragraphs: string[] };
  codeBox?: { 
      lines: { element: string; spaces: number; color: string }[];
      codeLang: string;
    };
  listBlock?: string[];
  imagesGallery?: { srcUrl: string; altText: string; descText: string }[];
}[];
```

## Articles and Resouces

- [Dynamic imports for components / Next.js doc](https://nextjs.org/learn-pages-router/seo/improve/dynamic-import-components)
- [Dynamic import in Next.js / medium.com](https://medium.com/@bharatnatrayn11/dynamic-import-in-next-js-3e8c8e4a9606)
