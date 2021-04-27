export default interface ResponseSchema {
  user?: string;
  type?: string;
  navmap?: {
    title?: string;
    active?: boolean;
    lists?: {
      active?: boolean
      listname?: string;
      link?: string;
    }[];
  }[];
  dashboards?: {
    id?: string;
    link?: string;
  }[];
  navigation?: string[];
  dashboardList?: {
    recents?: {
      title?: string;
      link?: string;
      image?: string;
    }[];
    starred?: {
      title?: string;
      link?: string;
      image?: string;
    }[];
  };
}
