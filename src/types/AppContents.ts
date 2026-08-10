export type AppContents = {
  pages: { main: MainPageContents };
};

export type MainPageContents = {
  hero: {
    title: string[];
    subtitle: string;
    label: string;
    cta: string;
  };
  docs: {
    about: {
      label: string;
      contents: string[];
      table: {
        label: string;
        data: string[];
      }[];
    };
    experience: {
      label: string;
      contents: {
        title: string;
        subtitle?: string;
        date?: string;
        location?: string;
        description?: string;
        bulletPoints?: string[];
      }[];
    };
    contact: {
      label: string;
      prelude: string;
      socials: {
        label: string;
        href: string;
      }[];
    };
  };
};
